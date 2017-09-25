var connection = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},

	insertOne: function(col, val, cb) {
		orm.insertOne("burgers", col, val, function(res) {
			cb(res);
		});
	},

	updateOne: function(val, cond, cb) {
		orm.updateOne("burgers", val, cond, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;