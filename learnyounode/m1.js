var fs = require('fs');

var filterFiles = function( directoryPath, filterString , callback) {
    fs.readdir(directoryPath, function(err, list){
        var filteredList = [];
        var err1 = null;
        if(err) {
            err1 = err;
        } else {
            for(var i = 0; i < list.length; i++) {
                if(list[i].indexOf("."+filterString) != -1) {
                    filteredList.push(list[i]);
                }
            }
            
        } 
        callback(err1, filteredList);
        
    });
};

module.exports = filterFiles;