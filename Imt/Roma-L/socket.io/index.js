var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){

  socket.on("nickName", function(nick) {
    nicks[nick] = socket.id;
  })

  console.log('a user connected');
  socket.broadcast.emit('new user', "user added")
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    socket.broadcast.emit('get chat message', msg);
  });
});





