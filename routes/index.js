var express = require('express');
var router = express.Router();
var db = require('../db/db.js');
var controller = require('../controller/controller.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index',{user:"Sandip Ghadge"});
    next();
    res.end();
}, function(req, res){
    console.log('called next');
});

router.get('/about', function(req, res) {
    res.render('about');
    res.end();

});


router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/register', function(req, res) {

    // console.log(req.body);
    db.query('SELECT * FROM `users`', function(err, data){
        if(!err){
            console.log('data ', data);
            res.send(data).end();
        }else{
            console.log('error');
        }
    });

    res.render('register');
});

router.get('/sandeep', function(req, res) {
    controller.register(req, res);
});

module.exports = router;
