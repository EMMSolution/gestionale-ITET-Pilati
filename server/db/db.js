const mysql = require('mysql');
const impDB1 = {
    host     :  "192.168.1.154",
    user     :  "berta",
    password :  "SERVER2006berta",
    database :  "gestionalePilati"
}

var connDB1 = mysql.createConnection(impDB1);

export {connDB1};