var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    var fileReadStream = fs.createReadStream(process.argv[2]);
    fileReadStream.pipe(response);
});

server.listen(8000);