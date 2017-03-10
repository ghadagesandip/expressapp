var db = require('../db/db.js');
var passhasher = require('../controller/components/passhasher.js');
var session = require('express-session')

module.exports = {

    register : function(req, res){


        if(req.body.password != undefined && req.body.password != "" && req.body.username != undefined && req.body.username != "" && req.body.email != undefined && req.body.email != ""){
            req.body.password = req.body.password.trim();
            passhasher.encryptPassword(req.body.password, function(err, hashedPassword){
                if(!err){
                    req.body.password = hashedPassword;
                    var sql = "INSERT INTO `expresstest`.`users` (`id`, `username`, `password`, `first_name`,`last_name`,`email`,`gender`) VALUES (NULL, '"+req.body.username+"', '"+req.body.password+"', '"+req.body.first_name+"', '"+req.body.last_name+"', '"+req.body.email+"', '"+req.body.gender+"');"
                    db.query(sql, function(err, data){
                        if(!err){
                            res.render('register',{message : 'registered successfully'});
                            res.end();
                        }else{
                            res.render('register',{message : 'Sorry, error occurred'});
                            res.end();
                        }
                    })
                }
            })
        }else{
            res.render('register',{message : 'Enter details'});
            console.log('password ', req.body.password);
            res.end();
        }
    },

    login : function(req, res){
        if(req.body.username != '' && req.body.password != ''){

            var sql = "SELECT * FROM `users` WHERE `username`='"+req.body.username.trim()+"'";
            console.log(sql);
            db.query(sql, function(err, result){
                console.log('result', result)
                if(err){
                    res.redirect('/login?failed=invalid_credentials')

                }else{
                    if(result.length){
                        if(result[0].password != undefined){
                            passhasher.comparePassword(req.body.password, result[0].password, function(err, ismatched){
                                if(!err){
                                    if(ismatched){
                                        req.session.user = result[0];
                                        res.redirect('/user/dashboard');
                                    }else
                                        res.redirect('/login?failed=invalid_credentials')
                                }else{
                                    res.end();
                                }
                            })
                        }else{
                            res.send('no record found').end();
                        }
                    }else{
                        res.redirect('/login?failed=invalid_credentials')
                    }
                }

            })
        }else{
            res.render('login',{message : 'you entered invalid credentials'});
            res.end();
        }
    },

    logout : function (req, res) {
        if(req.session.user){
            req.session.user = null;
            res.redirect('/user/login')
        }else{
            console.log('not loggedin')
        }
    }
}