var mysql = require('mysql');
var config = require('../db/db.config.json');
var connection = mysql.createConnection(config.mysql);

module.exports = {

    query : function(sql, callback){
        connection.query(sql, function(err, result) {
            if (err){
                callback(err);
            }else{
                callback(null, result);
            }
        });
    }
};


