module.exports = {

    isLogin : function(req, res, next){
        console.log('referer ',req.headers.referer);
        console.log('request for ', req.path);

        if(req.session.user){
            console.log('loggedin............. ')
            next();
        }else{
            if(req.path=='/user/login' || req.path=='/login' || req.path=='/register' || req.path=='/user/register'){
                next();
            }else{
                res.redirect('/user/login');
            }

        }
    }
}