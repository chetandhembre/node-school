/*
  #####################################################################
  ##                         ~~  CONCAT  ~~                          ##
  #####################################################################

You will be given text on process.stdin. Buffer the text and reverse it using
the `concat-stream` module before writing it to stdout.
*/


var concat = require('concat-stream');

process.stdin.pipe(concat(function(data){
    console.log(reverse1(data.toString()));
}));

function reverse1(data) {
    var d = "";
    for(var i = data.length-1; i >= 0; i--) {
        d += data[i];
    }
    return d;
}