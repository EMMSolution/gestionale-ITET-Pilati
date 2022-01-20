var express = require('express');
var router = express.Router();
var db1 = require('../database/db1');

// temporanea come cosa
router.get('/elaborati', function(req, res, next){
    res.render('dashElaborati');
});

module.exports = router;
