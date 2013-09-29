var http = require('http');



http.get(process.argv[2], function(stream){
    stream.setEncoding('utf8');
    stream.on('data',console.log);
    
});

         
