function router(app, express, mongoose) {
    var ejs = require('ejs');
    ejs.delimiter = "?";

    app.set('view engine', 'ejs');
    
    //получаем модель
    var todoModel = require("../schemas/todoList.js")(mongoose);
    var task = new todoModel({
        task: "Some task",
        time: 1479999406496,
        status: true
    });
    task.save();


    app.get('/', function(req, res) {

        //1 - все таски
        todoModel.find(function(err, tasks) {
            console.log(tasks);
          res.render('template', {title:"main", data:tasks});
        });
       
        

    });
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
