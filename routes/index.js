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




module.exports = router;
