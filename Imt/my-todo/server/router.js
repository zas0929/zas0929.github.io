function router(app, express, mongoose) {
    var ejs = require('ejs');
    ejs.delimiter = "?";

    app.set('view engine', 'ejs');

    //получаем модель
    var todoModel = require("../schemas/todoList.js")(mongoose);
    var task = new todoModel({
        task: "Today Task 1",
        time: 24,
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
                page: "main",
                title: "main",
                data: tasks
            });

        });
    });
    app.get('/notdone', function(req, res) {
        var taskId = req.query.taskId;
        todoModel.findOne({"_id" : taskId}, function(err, list) {
            list.status = false;
            list.save(function(err) {
                console.log('task not done');
            })
        })
    });
    app.get('/done', function(req, res) {
        var taskId = req.query.taskId;
        todoModel.findOne({"_id" : taskId}, function(err, list) {
            list.status = true;
            list.save(function(err) {
                console.log('task done');
            })
        })
    });
    app.get('/edit', function(req, res) {
        var taskId = req.query.editId;
        var taskEdit = req.query.taskEdit;
        var timeEdit = req.query.timeEdit;
        todoModel.findOne({"_id" : taskId}, function(err, list) {
            list.task = taskEdit;
            list.time = timeEdit;
            list.save(function(err) {
                console.log("task updated");
            });
        })
    })
    app.get('/remove', function(req, res) {
        var taskId = req.query.removeId;
        console.log(taskId);
        todoModel.remove({"_id" : taskId}, function(err) {
            console.log('task deleted');
        })
    })
    app.get('/add', function(req, res) {
        var taskReq = req.query.taskAdd;
        var timeReq = req.query.timeAdd;
        console.log(taskReq);
        console.log(timeReq);
        var task = new todoModel({
            task: taskReq,
            time: timeReq,
            status: false
        });
        task.save();
    })
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
