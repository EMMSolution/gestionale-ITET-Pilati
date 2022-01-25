var express = require('express');
var session = require('express-session');
var formidable = require('formidable');
var router = express.Router();
var db1 = require('../database/db1');

// !variabile globale non sicura!
var sess;

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

router.get("/dashboard", function(res, req){
	
});

router.post('/dashboard', function(req, res){
	
	var tabellaEdb;

	db1.query('SELECT * FROM elaborati', function(err, result, fields){
		tabellaEdb = result;
	});
	const email = req.body.email;
	const password = req.body.password;

	var query = 'SELECT * FROM user WHERE email="' + email + '" AND password="' + password + '"';
	db1.query(query, function(err, result, fields){
		var nomeU = result[0].name;
		if(err){
			console.log(err);
		} else {
			if(result == ""){
				res.render('login', {title: "Login error", errore: true});
			} else {
				console.log(nomeU + " si è loggato")
				res.render('dashboard', {title: "Dashboard", nomeUtente: nomeU, elaborati: tabellaEdb});
			}
		}
	});
});

router.post('/register', function(req, res){

	const nome = req.body.nome;
	const email = req.body.email;
	const password1 = req.body.pass1;
	const password2 = req.body.pass2;
	var enUsata = false;

	sess.name = nome;
	sess.password = password2;

	// da sistemare gli errori non arrivano in modo ordinato
	if (password1 === password2){
		if(enUsata == false){
			if(nome != "" || email != "" || password1 != "" || password2 != ""){
					
				var query = "INSERT INTO user (name, privileges, password, email) VALUE ('"+nome+"',"+1+",'"+password2+"','"+email+"')";
				db1.query(query, function(err, result, fields){
					if(err){
						console.log(err);
					} else {
						console.log(nome + " si è loggato");
						res.redirect('/login');
					}
				});
			} else {
				res.render('register', {title: "Register error", errore: "errore: riempire tutti i campi"});
			}
		} else if(enUsata == true) {
			res.render('register', {title: "Register error", errore: "errore: nome utente o password già utilizati"});
		}
	} else {
		res.render('register', {title: "Register error", errore: "errore: password diverse"});
	}

});

router.post('/userImgUpload', function(res, req){
	var userImg = new formidable.IncomingForm();
	userImg.parse(req, function(err, files){
		var clientPath = files.filetoupload.filepath;
		var serverPath = __dirname + "../public/images/user/" + userName;
		fs.rename(clientPath, serverPath, function(err){
			if(err){
				console.log(err);
			} else {
				res.render('dashboard', {title: "Dashboard", nomeUtente: nomeU, elaborati: tabellaEdb, imp: true});
			}
		});
	});
});

module.exports = router;
