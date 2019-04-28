// *********************************************************************
// MODEL - APPLICATION CORE
// *********************************************************************

//REQUIRE ORM
//======================================================================
var orm = require("../config/orm.js");

//Table = burrito
var burrito = {
    //Select
    selectAll: function (cb) {
        orm.selectAll("burrito", function (res) {
            cb(res);
        });
    },

    //Create
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burrito", cols, vals, function (res) {
            cb(res);
        });
    },

    //Update
    update: function (objColVals, condition, cb) {
        orm.update("burrito", objColVals, condition, function (res) {
            cb(res);
        });
    },

    //Delete
    deleteOne: function (condition, cb) {
        orm.deleteOne("burrito", condition, function (res) {
            cb(res);
        });
    }
};


//EXPORT BURRITO
//======================================================================
module.exports = burrito;