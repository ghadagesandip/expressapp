var express = require('express');
var router = express.Router();

router.post('/login', function(req, res){
    console.log(req.body);
    res.send('done').end();
});

router.post('/register', function(req, res){
    console.log(req.body);
    res.send('done').end();
});


module.exports = router;
