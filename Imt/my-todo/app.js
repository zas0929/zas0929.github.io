var server = require("./server");
var config = require("./config");

 var mongoose = require("mongoose");

 mongoose.connect('mongodb://localhost/todoTodo');
 var db = mongoose.connection;

db.once("open", function() {
	console.log(config.get("port"));
	server(config, mongoose);
	console.log("app is running")
})



console.log(config.get("port"));

// server(config);

console.log("app is running!");
