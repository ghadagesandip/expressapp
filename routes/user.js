var express = require('express');
var multer  = require('multer')
var router = express.Router();
var db = require('../db/db.js');
var userCtrl = require('../controller/user.js');
var logincheck_middleware = require('../middleware/logincheck.js')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/profile_pic')
    },
    filename: function (req, file, cb) {
        console.log(file);
        var ext = file.originalname.substring(file.originalname.lastIndexOf('.'));
        console.log(ext);
        cb(null, file.fieldname + '-' + Date.now()+ext)
    }
})
var upload_pp = multer({ storage: storage });



router.get('/login', logincheck_middleware.isLogin, function(req, res) {
    if(req.session.user){
        res.redirect('/user/dashboard')
    }else{
        var message = req.query.failed ? 'Invalid login credentials'  : 'welcome ';
        res.render('login', {message : message});
    }

});



router.get('/register', logincheck_middleware.isLogin, function(req, res) {
    res.render('register',{ message : 'welcome'});
});


router.post('/login', function(req, res){
    userCtrl.login(req, res);
});

router.post('/register', logincheck_middleware.isLogin,  function(req, res){
    userCtrl.register(req, res);
});

router.get('/dashboard', logincheck_middleware.isLogin, function(req, res){
    res.render('dashboard');
    res.end();
});

router.get('/update-profile', logincheck_middleware.isLogin, function(req, res){
    res.render('update-profile');
    res.end();
});

router.get('/logout', function(req, res){
    userCtrl.logout(req, res);
});

router.get('/messages', function(req, res){
    res.render('messages');
    res.end();
});

router.get('/uploadPic', logincheck_middleware.isLogin, function(req, res){
    res.render('upload_pic');
    res.end();
})

router.post('/uploadPic',  upload_pp.single('avatar'), function(req, res){
    userCtrl.uploadPic(req, res);
    res.render('upload_pic');
    res.end();
})


module.exports = router;

