var express = require('express');
var router = express.Router();
var db1 = require('../database/db1');

// indirizzamento in caoso di nessuna pagina
router.get('/', function(req, res) {
  	res.render('index', {title: 'Home'});
});

// indirizzamento in caso di /login
router.get('/login', function(req, res) {
	res.render('login', {title: 'Login'});
});

router.get("/register", function(req, res){
	res.render('register', {title: 'Register'});
});

// post login (messo qui perchè sen'ò l'url risultava /dashboard anche dopo un login fallito)
router.post('/dashboard', function(req, res){

	// prendo dalla richiesta post i dati del body
	const email = req.body.email;
	const password = req.body.password;

	// query al database1 (192.168.1.154)
	var query = 'SELECT * FROM user WHERE email="' + email + '" AND password="' + password + '"';
	db1.query(query, function(err, result, fields){

		// funzione che constrolla l'esito della query
		if(err){
			console.log(err);
		} else {
			if(result == ""){
				res.render('login', {title: "Login error", errore: true});
			} else {
				console.log(result[0].name)
				res.render('dashboard', {title: "Dashboard", nomeUtente: result[0].name});
			}
		}

	});

});

router.post('/register', function(req, res){

	const nome = req.body.nome;
	const email = req.body.email;
	const password1 = req.body.pass1;
	const password2 = req.body.pass2;

	var data = new Date();
	var dataFormattata = data.getDay()+"/"+data.getMonth()+"/"+data.getFullYear();
	
	var query = "INSERT INTO user (name, privileges, data, password, email) VALUE ('"+nome+"',"+1+",'"+dataFormattata+"','"+password2+"','"+email+"')";
	db1.query(query, function(err, result, fields){
		if(err){
			console.log(err);
		} else {
			console.log(nome + "Si è loggato");
			res.render('dashboard', {title: "Login", nomeUtente: nome, benvenuto: true});
		}
	});
});

module.exports = router;
