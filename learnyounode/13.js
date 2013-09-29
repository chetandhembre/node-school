var http = require('http');
var url = require('url');
var queryString = require('querystring');


var server = http.createServer(function(request, response){
    var urlData = url.parse(request.url); 
    var isotime = queryString.parse(urlData.query)["iso"];
    response.writeHead(200,{"Content-Type" : "application/json"});
    if(urlData.pathname == "/api/parsetime") {
        //console.log();
        response.write(JSON.stringify(parseTime(isotime)));
    } else if(urlData.pathname == '/api/unixtime') {
        response.write(JSON.stringify(unixitime(isotime)));
    }
    response.end();
});


var parseTime = function(time) {
    var date = new Date(time);
    console.log(date);
    var obj = {};
    obj.hour = date.getHours();
    obj.minute = date.getMinutes();
    obj.second = date.getSeconds();

    return obj;
}

var unixitime = function(time) {
    var date = new Date(time);
    var obj = {};
    obj.unixtime = date.getTime();
    return obj;
}

server.listen(8000);