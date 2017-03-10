module.exports = {

    test :  function(req, res, next){
        console.log('test middleware called');
        next();
    }
}