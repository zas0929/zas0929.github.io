function router(app, express, mongoose) {
    var ejs = require('ejs');
    ejs.delimiter = "?";

    app.set('view engine', 'ejs');

    //получаем модель
    var todoModel = require("../schemas/todoList.js")(mongoose);
    var task = new todoModel({
        task: "After Tomorrow Task 1",
        time: 72,
        status: false
    });
    // task.save();
    // todoModel.findOne({"_id":"58381d9dd40b67101448762e"}, function(err, tasks) {
    // 	tasks.task = "After Tomorrow Task 1";
    //     	tasks.save(function(err) {
	// 	console.log("login updated");
	// });
    // });
    app.get('/', function(req, res) {

        //1 - все таски
        todoModel.find(function(err, tasks) {
            res.render('template', {
                title: "main",
                data: tasks
            });
        });
    });
    app.get('/today', function(req, res) {
        todoModel.find({"time": 24}, function(err, todayTasks) {
            res.render('todo', {
                title: "main",
                data: todayTasks
            })
        })
    })
    


    app.get('/tomorrow', function(req, res) {
        todoModel.find({"time": 48}, function(err, tomorrowTasks) {
            res.render('todo', {
                title: "main",
                data: tomorrowTasks
            })
        })
    })
    app.use(express.static(__dirname + "/../public"));
    console.log(mongoose)

    //    db.on("open", function() {
    //    	console.log("db is good");
    //    });
    //    var taskSchema = mongoose.Schema({
    //        taskName: String,
    //        task : String,
    //    	status : Boolean,
    //    	time : String
    //    })
    //    taskSchema.methods.sayHello = function() {
    //    		console.log("task " + this.taskName + " confirmed");
    //    }
    //    var taskModel = mongoose.model('taskModel', taskSchema);

    //    var task = new taskModel({
    //        taskName: "today asign",
    //        task: "have a rest",
    //        status: false,
    //        time: "2 hours"
    //    });


    //    task.save(function(err, user) {
    //         if (err) return console.error(err);
    //         task.sayHello();
    //        })

    //    // app.get('/show', function(req, res) {
    //    //     //получаем все из базы
    //    //     taskModel.find(function(err, users) {
    //    //     console.log(task);
    //    // });
    //    //     res.render('template', task);

    //    // })
    //    app.get('/', function(req, res) {
    //        taskModel.find(function(err, users) {
    //            console.log(users);
    //          res.render('template', {title:"main", data:users});
    //        });



    // });
    //    app.get('/save', function(req, res) {
    //        // task.save(function(err, user) {
    //        //  if (err) return console.error(err);
    //        //  task.sayHello();
    //        // })
    //    })
}

module.exports = router;
