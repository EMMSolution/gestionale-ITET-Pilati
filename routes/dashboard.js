var express = require('express');
var router = express.Router();
var db1 = require('../database/db1');

// temporanea come cosa
router.get('/elaborati', function(req, res, next){
    res.render('dashElaborati');
});

router.post('/', function(req, res, next){
	const email = req.body.email;
	const password = req.body.password;
    
	var query = eval("SELECT * FOROM user WHERE email='" + email + "' AND password='" + password + "'");
	console.log("\n\n" + query + "\n\n");

	db1.query(query, function(err, result, fields){
		console.log(result);
		/*
        if(err){
			console.log(err);
            res.render('login', {errore: true});
		} else {
			res.render('dashboard', {title: "Dashboard"});
		}
        */
	});
    res.render('dashboard', {title: "Dashboard"});
});

module.exports = router;
