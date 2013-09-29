var m1 = require('./m1.js')

m1(process.argv[2], process.argv[3], function(err, list){
   if(err) {
      console.log(err);       
   } 
    
   list.forEach(function(filename) {
       console.log(filename);
   });        
});