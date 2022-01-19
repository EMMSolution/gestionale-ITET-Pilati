var express = require('express');
var router = express.Router();
var db1 = require('../database/db1');

router.get('/', function(req, res, next) {
  	res.render('index', {title: 'Home'});
});

router.get('/login', function(req, res, next) {
	res.render('login', {title: 'Login'});
});

module.exports = router;
