module.exports = {

    isLogin : function(req, res, next){
        if(req.session.user){
            res.redirect('/user/dashboard')
        }else{
            next();
        }

    }
}