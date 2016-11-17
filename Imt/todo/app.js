var express = require("express");
var app = express();

var db = require("./todo");
// console.log(db);
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