var net = require('net');
var server = net.createServer(function(socket){
    var date = new Date();
    var data = date.getFullYear() + "-" + formateDate(date.getMonth() + 1) + "-" + formateDate(date.getDate())  +" " +  formateDate(date.getHours()) + ":" + formateDate(date.getMinutes());
    socket.write(data);
    socket.end("");
    
});

function formateDate(number) {
    return number > 9 ? number : "0"+number;
}
  
server.listen(8000);
