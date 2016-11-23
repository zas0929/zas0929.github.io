var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/mongoTest');

var db = mongoose.connection;

db.on("open", function() {
	console.log("db is good");
});

// создаем схему
var userSchema = mongoose.Schema({
	fname : String,
	lname : String,
	login : String,
	passwd : String,
	age : Number
})
//создаем метод к схеме
userSchema.methods.sayHello = function() {
		console.log("My name is " + this.fname);
}
// создаем модель
var userModel = mongoose.model('userModel', userSchema);

//создаем пользователя
var user = new userModel({
	fname: "ihor",
	lname: "pup",
	login: "ih",
	passwd: "12345",
	age : 78
});

user.sayHello();

// сохраняем user в базу
// user.save(function(err, user) {
// 	if (err) return console.error(err);
// 	user.sayHello();
// })

// userModel.find({"fname" : "ihor",
// 				"age": { $gt: 78 }}, 'login passwd', function(err, users) {
// 	console.log(users);
// })

// userModel.find(function(err, users) {
// 	console.log(users);
// });

// userModel.remove({"fname":"vasya"}, function(err) {
// 	console.log("Vasya deleted");
// });
// userModel.findOne({"fname":"ihor"}, function(err, users) {
// 	users.login = "ihor666";
// 	users.save(function(err) {
// 		console.log("login updated");
// 	});
// 	console.log(users);
// })

userModel.find(function(err, users) {
	console.log(users);
});
