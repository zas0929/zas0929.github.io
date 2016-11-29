//подключаем express
var express = require("express");

var app = express();

var router = require("./router.js");

// var serverName = "node Server";
// var router = require("./router.js");


function server(config, mongoose) {

		// console.log('I am '+serverName+' !');
	router(app, express, mongoose);	

	app.listen(config.get("port"), function() {
		console.log("I am ready on port " +config.get("port"));
	})
}

module.exports = server;
