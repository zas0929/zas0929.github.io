function makeModelTodo(mongoose) {

	var todoSchema = mongoose.Schema({
		task: String,
		time: Number,
		status: Boolean
	});

	return mongoose.model('todoModel', todoSchema);

}

module.exports = makeModelTodo;
