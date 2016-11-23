var express = require("express");
var app = express();

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/mongoTodo');

var db = mongoose.connection;

db.on("open", function() {
	console.log("db is good");
});
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));


app.get('/', function(req, res){
	res.render("index");
});

app.get("/todo", function(req,res){
	var data = req.query;
	// console.log(data);
	for (var key in db) {

		console.log(db["key"]);
	}
	res.send('dfhjfdhgfdg');
	// res.render("todo", {});
})

app.listen(3000, function(){
	console.log("I am ready on port "+3000);
})
