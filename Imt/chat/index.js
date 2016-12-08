var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
var nicks = {};
io.on('connection', function(socket) {
    socket.on("nickName", function(nick) {
        console.log('nick name: ' + nick + socket.id);
        nicks[nick] = socket.id;
        socket.broadcast.emit('new user', "" + nick +" entered")
    })


    socket.on('disconnect', function(nick) {
        console.log('user disconnected');

        for (nick in nicks) {
            console.log(nick);
                console.log(nick + "out");
        }
        console.log(socket.id);
        socket.broadcast.emit('user out', "" + nick + " out");

    });

    socket.on('chat message', function(msg) {
        for (nick in nicks) {
            console.log(nick);
        }
        console.log('message from ' + nick + " : " + msg);
        io.emit('get chat message', 'message from ' + nick + " : " + msg);

    });
});
