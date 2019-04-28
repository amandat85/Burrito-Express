// *********************************************************************
// CONNECTION TO DATABASE
// *********************************************************************

//REQUIRE=====================================
//dotenv
require("dotenv").config();
//MySQL
var mysql = require("mysql");
//Connection variable
var connection;

//CONNECTION
//======================================================================
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.ROOT_PASSWORD,
        database: "burrito_db"
    });
}
//Check connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack)
    }
    console.log("connected as id " + connection.threadId);
});

//EXPORT CONNECTION TO ORM.JS
//=======================================================================
module.exports = connection;