const http = require("http");
const mysql = require("mysql");
const fs = require("fs");
const impostazioniDB1 = {
    host     : "192.168.1.154",
    user     : "berta",
    password : "SERVER2006berta",
    database : "gestionalePilati"
};

var database1 = mysql.createConnection(impostazioniDB1);
var query1;
var homeHTML;

fs.readFile('sito/home.html', function(err, data){
    if(err){
        console.log(err);
    }
    homeHTML = data;
});

database1.connect(function(err){});

database1.query("SELECT * FROM elaborati", function (err, result, fields) {
    if(err){
        console.log(err);
    }
    query1 = result;
});

var webServer = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(homeHTML);
    console.log(query1);
    res.end();
});

webServer.listen(8000);

console.log("server web acceso");