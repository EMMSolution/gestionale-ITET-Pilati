// prova mysql
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "192.168.1.154",
    user: "root",
    password: "SERVER2006berta",
    port: '/var/run/mysqld/mysqld.sock'
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
