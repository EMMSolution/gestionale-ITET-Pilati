var express = require('express');
var router = express.Router();
var db1 = require('../database/db1');

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', {title: 'Home'});
});

router.get('/login', function(req, res, next) {
	res.render('login', {title: 'Login'});
});

/* Login user */
router.post('/login', function (req, res, next) {
	const email = req.body.email;
	const password = req.body.password;
	
	console.log("email: " + email);
	console.log("pass: " + password);

	var query = "SELECT * FROM user WHERE email="+email+" AND password="+password;
	console.log(query);

	db1.query(query, function(err, result, fields){
		if(err){
			console.log(err);
			res.render('login', {errore: 'Credenziali'});
		} else {
			res.render('dashboard', {title: 'Dashboard'});
			console.log(result);
		}
	})

});

router.get('/dashboard', function(req, res, next) {
	res.render('dashboard', {title: 'Login'});
});

module.exports = router;
