const http = require("http");
const mysql = require("mysql");
const fs = require("fs");
// var passwordDB1 = process.env.passDB;

const impostazioniDB1 = {
    host: "192.168.1.154",
    user: "berta",
    password: "SERVER2006berta",
    database: "gestionalePilati"
};

var database1 = mysql.createPool(impostazioniDB1);

var webServer = http.createServer(function(req, res){
    database1.query("USE gestionalePilati;", function(err, result){
        fs.readFile('/home/pi/gestionale-ITET-Pilati/sito/home.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });
    })
});

webServer.listen(8000);

console.log("server web acceso");