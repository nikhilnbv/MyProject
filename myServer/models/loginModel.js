//const mysql = require('mysql');

const config = {
    host : 'localhost',
    port : 3306,
    user : 'root',
    password: 'cybage@123',
    database: 'node_workshop_db'
};

//var connection = mysql.createConnection(config);
//connection.connect();

//var users = {};

//users.authenticate = function(body, callback){
    users.authenticate = function(username, password , callback){
    console.log("inside authenticate");
    callback(true);
}
module.exports = users;

//connection.query