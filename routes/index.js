var express = require('express');
var router = express.Router();

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

	if(email === "bertagnollimarco999@gmail.com" && password === "ciao") {
		res.render('dashboard', {title: 'Dashboard'});
	} else {
		console.log("accesso effetuato");
		res.render('login', {errore: 'credenziali'});
	}
});

router.get('/dashboard', function(req, res, next) {
	res.render('dashboard', {title: 'Login'});
});

module.exports = router;
