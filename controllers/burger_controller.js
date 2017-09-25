var burger = require("../models/burger.js");
var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/burger/insert", function(req, res) {
	burger.insertOne(["name", "devoured"], [req.body.name, req.body.devoured],
		function() {
			res.redirect("/burger");
		});
});

router.put("/burger/update/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.update({
		devoured: req.body.devoured}, condition,
		function() {
			res.redirect("/burger");
		});
	});

module.exports = router;