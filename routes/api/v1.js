var express = require('express');
var router = express.Router();
var db = require('../../db/db.js');



router.get('/', function(req, res){
res.json("Hello");
});


module.exports = router;
