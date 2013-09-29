/*
  #####################################################################
  ##                        ~~  TRANSFORM  ~~                        ##
  #####################################################################

Convert data from `process.stdin` to upper-case data on `process.stdout`
using the `through` module.
*/


var through = require('through');


var tr = through(function(data) {
    this.queue(data.toString().toUpperCase());
},function() {
    
});

process.stdin.pipe(tr).pipe(process.stdout);