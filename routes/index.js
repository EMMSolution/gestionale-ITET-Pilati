var express = require('express');
var router = express.Router();
var db1 = require('../database/db1');

// indirizzamento in caoso di nessuna pagina
router.get('/', function(req, res, next) {
  	res.render('index', {title: 'Home'});
});

// indirizzamento in caso di /login
router.get('/login', function(req, res, next) {
	res.render('login', {title: 'Login'});
});

// post login (messo qui perchè sen'ò l'url risultava /dashboard anche dopo un login fallito)
router.post('/dashboard', function(req, res, next){

	// prendo dalla richiesta post i dati del body
	const email = req.body.email;
	const password = req.body.password;

	// query al database1 (192.168.1.154)
	var query = 'SELECT "'+email+'" FROM user WHERE email="' + email + '" AND password="' + password + '"';
	db1.query(query, function(err, result, fields){

		// funzione che constrolla l'esito della query
		if(err){
			console.log(err);
		} else {
			if(result == ""){
				res.render('login', {title: "Login error", errore: true});
			} else {
				res.render('dashboard', {title: "Dashboard"});
			}
		}

	});

});

module.exports = router;
