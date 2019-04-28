// *********************************************************************
// CONTROLLER - INPUT TO DATABASE
// *********************************************************************

//REQUIRE
//======================================================================
var express = require("express");
var router = express.Router();

//REQUIRE BURRITO.JS
//======================================================================
var burrito = require("../models/burrito");

//ROUTES
//======================================================================
//Show all burritos
router.get("/", function (req, res) {
    burrito.selectAll(function (data) {
        var hbsObject = {
            burrito: data
        };
        res.render("index", hbsObject);
    });
});

//Add new burrito
router.post("/api/burrito", function (req, res) {
    burrito.insertOne(["burrito_name", "devoured"], [req.body.burrito_name, req.body.devoured], function (result) {
        // Send back the ID of the new burrito
        res.json({ id: result.insertId });
    });
});

//Update burrito status
router.put("/api/burrito/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burrito.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

//Delete burrito
router.delete("/api/burrito/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burrito.deleteOne(condition, function(result) {
        if (result.affectedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    });

//EXPORT ROUTER INTO SERVER
//======================================================================
module.exports = router;