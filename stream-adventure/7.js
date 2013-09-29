/*
  #####################################################################
  ##                       ~~  HTTP SERVER  ~~                       ##
  #####################################################################

In this challenge, write an http server that uses a through stream to write back
the request stream as upper-cased response data for POST requests.
*/


var http = require('http');
var through = require('through');

var tr = through(function(data) {
    
    this.queue(data.toString().toUpperCase());    
}, function(){
    
});

var server = http.createServer(function(request, response){
    if(request.method === 'POST') {
        var t = request.pipe(tr);
        t.pipe(response);
        
    } else {
        response.end('dlkjfdkljf');
    }
    response.end();
});

server.listen(8001);