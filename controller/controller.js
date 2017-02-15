var db = require('../db/db.js');

module.exports = {
    register : function(req, res){

        db.query('SELECT * FROM `users`', function(err, data){
            if(!err){
                console.log('data ', data);
                res.json(data).end();
;            }else{
                console.log('error');
            }
        });

    }
}