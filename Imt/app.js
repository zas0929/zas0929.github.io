var server = require("./server");
var config = require("./config");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todoList');
var db = mongoose.connection;


console.log(config.get("port"));

server(config, mongoose);

console.log("app is running!");