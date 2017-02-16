var bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {

    encryptPassword : function(password, callback){

        bcrypt.genSalt(saltRounds, function(err, salt){

            if(err)
                return callback(err);

            bcrypt.hash(password, salt,function(err,hash){
                return callback(err, hash);
            });
        });
    },

    comparePassword : function(password, userPassword, callback){

        bcrypt.compare(password,userPassword,function(err, isPasswordMatch){
            if(err)
                return callback(err);

            return callback(err, isPasswordMatch);
        })
    }


}