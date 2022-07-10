var http = require('http');
var dt = require('./customedate');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'Text/html'});
    res.write('The date and time are current: ' + dt.myDateTime());
    res.end();
}).listen(3000);