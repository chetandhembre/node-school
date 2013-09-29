var http = require('http');
var async = require('async');
var bl = require('bl');

var urls = [];
for(var i = 2; i < process.argv.length; i++) {
    urls.push(process.argv[i]);
}

async.map(urls,function(url,callback){
    http.get(url, function(response) {
       response.pipe(bl(function(err, data){
         if(err) {
            callback(err);
         } else {
            callback(null, data.toString()); 
         } 
       }));
        
});},function(err,results){
    results.forEach(function(result){
       console.log(result); 
    });
});