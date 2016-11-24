function router(app, express, mongoose) {
	//переопределяем %
	var ejs = require('ejs');
	ejs.delimiter = "?";
	//подключаем ejs к express
 	app.set('view engine', 'ejs');

 	// получаем модель
 	var todoModel = require("../schemas/todoList.js")(mongoose);
 	// var task = new todoModel({
 	// 	task : "testTask",
	 //    time : 1479999421878,
	 //    status : true
 	// })
 	// task.save();

 	//подключаем статику
 	app.use(express.static(__dirname + "/../public"));

	//get запрос
	app.get('/', function(req, res) {
		//main тип пересылаемых данных
		// res.type('text/html');
		//позволяет пересылать текстовые данные
		// res.send('main page');
		//подключаем шаблон index (в путь views и ejs не писать)

		//1 - все таски
		todoModel.find(function(err, tasks){
			console.log(tasks);
			res.render('template',{title:"Главная", data:tasks});
		})
		
		
	});
	
	
	app.use(function(req, res){
		res.type("text/plain");
		res.status(404);
		res.send("<h1>404 - not found</h1>")
	})

	app.use(function(err, req, res, next) {
		res.type('text/plain');
		res.status(500);
		res.send('500 - Server error');
	})

} 
module.exports = router;