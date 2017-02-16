var express = require('express');
var router = express.Router();
var db = require('../db/db.js');
var controller = require('../controller/controller.js')


router.post('/login', function(req, res){
    console.log(req.body);
    res.send('done').end();
});

router.post('/register', function(req, res){
    controller.register(req, res);
});


module.exports = router;
