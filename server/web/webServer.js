const http = require('http');

var webServer = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(homeHTML);
    console.log(query1);
    res.end();
});

export {webServer};