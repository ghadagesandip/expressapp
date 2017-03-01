var db = require('../db/db.js');
var passhasher = require('../controller/components/passhasher.js');

module.exports = {

    register : function(req, res){

        //res.json(req.body).end();
        if(req.body.password != undefined){
            req.body.password = req.body.password.trim()
            passhasher.encryptPassword(req.body.password, function(err, hashedPassword){
                if(!err){
                    req.body.password = hashedPassword;
                    var sql = "INSERT INTO `expresstest`.`users` (`id`, `username`, `password`, `first_name`) VALUES (NULL, '"+req.body.username+"', '"+req.body.password+"', '"+req.body.first_name+"');"
                    db.query(sql, function(err, data){
                        if(!err){
                            res.render('register',{message : 'registered successfully'});
                            res.end();
                        }else{
                            console.log(err);
                            throw err;
                        }
                    })
                }
            })
        }
    },

    login : function(req, res){
        if(req.body.username != undefined && req.body.password != undefined){

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
                                    if(ismatched)
                                        res.redirect('dashboard');
                                    else
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


        }
    }
}