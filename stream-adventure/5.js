/*
 #####################################################################
  ##                          ~~  LINES  ~~                          ##
  #####################################################################

Instead of transforming every line as in the previous "INPUT OUTPUT" example,
for this challenge, convert even-numbered lines to upper-case and odd-numbered
lines to lower-case. Consider the first line to be odd-numbered. For example
given this input:

    One
    Two
    Three
    Four

Your program should output:

    one
    TWO
    three
    FOUR

*/


var through = require('through');
var split = require('split');

var isOdd = false;
var tr = through(function(data){
    data = data.toString();
    if(isOdd) {
        data = data.toUpperCase();
    } else {
        data = data.toLowerCase();
    }
    this.queue(data+"\n");
    isOdd = isOdd ^ true;
    
}, function () {
    
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

