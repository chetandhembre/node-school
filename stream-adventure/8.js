var request = require('request');

process.stdin.pipe(request.post("http://127.0.0.1:8000")).pipe(process.stdout);
