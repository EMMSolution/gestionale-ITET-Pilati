var http = require('http');
var index = `
<h1>ciao</h1>
<h3>come va?</h3>
`;

const server = http.createServer(function (req, res){
  res.write(index);
  res.end();
})

server.listen('8080');
console.log("sever online");
