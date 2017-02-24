var express = require('express');
var router = express.Router();
var db = require('../db/db.js');
var controller = require('../controller/controller.js');


router.post('/login', function(req, res){
    controller.login(req, res);
});

router.post('/register', function(req, res){
    controller.register(req, res);
});

router.get('/dashboard', function(req, res){
    res.render('dashboard');
    res.end();

});

module.exports = router;
