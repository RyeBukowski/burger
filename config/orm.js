// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}


var orm = {
	selectAll: function(tableName, cb) {
    	var queryString = 'SELECT * FROM ' + tableName + ';';
    	connection.query(queryString, function (err, result) {
      		if(err) {
      			throw err;
      		}
      		cb(result);
    	});
	},

	insertOne: function(tableName,col,val, cb) {
		var queryString = 'INSERT INTO ' + tableName;
		queryString += " (";
		queryString += col.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(val.length);

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		});
	},

	updateOne: function(tableName, val, cond, cb) {
		var queryString = "UPDATE " + tableName;

		queryString += " SET ";
		queryString += objToSql(val);
		queryString += " WHERE ";
		queryString += cond;

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;