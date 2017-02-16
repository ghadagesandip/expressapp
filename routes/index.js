var express = require('express');
var router = express.Router();


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
    res.render('register');
});


module.exports = router;
