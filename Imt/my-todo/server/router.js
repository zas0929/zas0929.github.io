function router(app, express) {
    var ejs = require('ejs');
    ejs.delimiter = "?";

    app.set('view engine', 'ejs');

    app.use(express.static(__dirname + "/../public"));


    var mongoose = require("mongoose");

    mongoose.connect('mongodb://localhost/mongoTodo');
    var db = mongoose.connection;
    db.on("open", function() {
    	console.log("db is good");
    });
    var taskSchema = mongoose.Schema({
        taskName: String,
        task : String,
    	status : Boolean,
    	time : String
    })
    taskSchema.methods.sayHello = function() {
    		console.log("task " + this.taskName + " confirmed");
    }
    var taskModel = mongoose.model('taskModel', taskSchema);

    var task = new taskModel({
        taskName: "today asign",
        task: "have a rest",
        status: false,
        time: "2 hours"
    });

    // task.save(function(err, user) {
    // 	if (err) return console.error(err);
    // 	task.sayHello();
    // })
    taskModel.find(function(err, users) {
    	console.log(task.time);
    });








    app.get('/', function(req, res) {

		res.render('template', {title: task.time});

	});
    app.get('/localhost/mongoTodo', function(req, res) {
        res.render('comments', {comments: docs})
    })
}

module.exports = router;
