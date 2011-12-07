var http = require('http');
http.createServer(function (req, res) {
  setTimeout(function(){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('{"data": "'+new Date().toTimeString()+'"}');  
  },2000);
  }).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337');
