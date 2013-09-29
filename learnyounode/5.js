var fs = require('fs');
var fileextension = "."+ process.argv[3];
fs.readdir(process.argv[2], function(err, list){
    for(var i = 0; i < list.length; i++) {
        if(list[i].indexOf(fileextension) != -1) {
            console.log(list[i]);
        }
    }
});