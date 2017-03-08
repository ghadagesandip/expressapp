var express = require('express');
var router = express.Router();
var logincheck_middleware = require('../middleware/logincheck.js')

/* GET home page. */
router.get('/',  function(req, res, next) {
    res.render('index',{user:"Sandip Ghadge"});
    next();
    res.end();
}, function(req, res){

});

router.get('/about', function(req, res) {
    res.render('about');
    res.end();
});


router.get('/login', logincheck_middleware.isLogin, function(req, res) {
  console.log('req.query', req.query)
  var message = req.query.failed ? 'Invalid login credentials'  : 'welcome ';
  res.render('login', {message : message});
});

router.get('/register', logincheck_middleware.isLogin, function(req, res) {
    res.render('register',{message : 'welcome'});
});


module.exports = router;
