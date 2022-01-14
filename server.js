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

var database1 = mysql.createConnection(impostazioniDB1);

var webServer = http.createServer(function(req, res){

    fs.readFile("home.html", function(err, data){
        if(err) throw err;
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(data)
        res.end();
    })

    /*
    database1.connect(function(err){
        console.log("serverAcceso");
        if(err) throw err;
        console.log("database acceso");
        database1.query("USE gestionalePilati;", function(err, result){
        if(err) throw err;
            console.log(result);
            res.write(result)
            res.end();
        })
    });
    */
});

webServer.listen(8000);

console.log("server web acceso");