var mysql = require('mysql');
var config = require('../db/db.config.json');
var connection = mysql.createConnection(config.mysql);

connection.connect(function(err){
    if(err){
        console.log('could not connect', err)
    }else{
        console.log('connected');
    }

});


module.exports = {

    query : function(sql, callback){
        connection.query(sql, function(err, result){
           if(err)
               callback(err);
            else
               connection.end(); callback(null, result);
        });
    }
};


