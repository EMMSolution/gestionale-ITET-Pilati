const mysql = require('mysql');
const impostazioniDB1 = {
    host: '192.168.1.154',
    user: 'berta',
    password: 'SERVER2006berta',
    database: 'gestionalePilati'
};

var db1 = mysql.createConnection(impostazioniDB1);
db1.connect(function(err){
    if(err){
        console.log(err);
    }
});

module.exports = db1;