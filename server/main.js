// modules
const http = require("http");
const mysql = require("mysql");
const fs = require("fs");

// variables
var query1;
var homeHTML;

// create db1
const impDB1 = {
    host     :  "192.168.1.154",
    user     :  "berta",
    password :  "SERVER2006berta",
    database :  "gestionalePilati"
}
var connDB1 = mysql.createConnection(impDB1);

// read 'home.html' file
fs.readFile('../sito/home.html', function(err, data){
    if(err){
        console.log(err);
    }
    homeHTML = data;
});

// send a query to the db1
connDB1.connect(function(err){});
connDB1.query("SELECT * FROM elaborati", function (err, result, fields) {
    if(err){
        console.log(err);
    }
    query1 = result;
});

// put the data into webserver function

function serverData(err, req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(homeHTML);
    console.log(query1);
    res.end();
}

// create the web server
var webServer = http.createServer(serverData);

// listen the webserver at port 8000
webServer.listen(8000, function(){
    console.log("server web acceso");
});

