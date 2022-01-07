const http = require("http");
//const mysql = require("mysql");
const gpio = require("onoff").Gpio;
var led1 = new gpio(4, "out");  /*
var query1;
var impostazioniDB = {
    host: "localhost",
    user: "root",
    password: "SERVER2006berta",
    database: "gestionalePilati"
}
var databaseRasp = mysql.createConnection(impostazioniDB);

databaseRasp.connect(function(err){
    databaseRasp.query("SELECT * FROM elaborati;", function(err, result, fields){
        
    });
});
*/
var webServer = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text(html"});
    res.write("tabella elaborati:");
    res.end()
});

webServer.listen(8000);
led1.writeSync(1);

function spegniLed(){
    led1.writeSync(0);
    led1.unexport();
}

process.on("SIGINT", spegniLed);