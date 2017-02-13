var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{user:"John Smith"});
  next();
});

router.get('/about', function(req, res, next) {
  res.render('about');
  next();
});

router.get('/login', function(req, res, next) {
  res.render('login');
  next();
});

module.exports = router;
