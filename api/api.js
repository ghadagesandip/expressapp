var express = require('express');
var router = express.Router();
var v1 = require('../api/v1/v1.js');



/* GET home page. */
router.get('/login', function(req, res) {
    v1.login(req, res);
});

module.exports = router;
