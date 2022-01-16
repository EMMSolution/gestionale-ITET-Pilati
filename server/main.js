// databases
import * as db from 'db/db.js';
// web server
import * as ws from 'web/webServer.js';
// mail authentication
import * as ma from 'mail/mailAuth.js';

// modules
const http = require("http");
const mysql = require("mysql");
const fs = require("fs");

// variables
var query1;
var homeHTML;

// read 'home.html' file
fs.readFile('../sito/home.html', function(err, data){
    if(err){
        console.log(err);
    }
    homeHTML = data;
});

// send a query to the db1
database1.connect(function(err){});
database1.query("SELECT * FROM elaborati", function (err, result, fields) {
    if(err){
        console.log(err);
    }
    query1 = result;
});

// listen the webserver at port 8000
webServer.listen(8000);
console.log("server web acceso");

