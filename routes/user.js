var express = require('express');
var router = express.Router();
var db = require('../db/db.js');
var userCtrl = require('../controller/user.js');


router.post('/login', function(req, res){
    userCtrl.login(req, res);
});

router.post('/register', function(req, res){
    userCtrl.register(req, res);
});

router.get('/dashboard', function(req, res){
    res.render('dashboard');
    res.end();
});

module.exports = router;
