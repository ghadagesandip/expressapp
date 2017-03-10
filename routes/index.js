var express = require('express');
var router = express.Router();
var test_middleware = require('../middleware/test.js')

/* GET home page. */
router.get('/', test_middleware.test, function(req, res, next) {
    res.render('index',{user:"Sandip Ghadge"});
    next();
    res.end();
    console.log('home called');
}, function(req, res){
    console.log('home next called');
});

router.get('/about', function(req, res) {
    res.render('about');
    res.end();
});




module.exports = router;
