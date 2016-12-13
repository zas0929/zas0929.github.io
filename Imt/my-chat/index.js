var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var nicks = {}
app.get('/', function(req, res) {
    res.sendfile('index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('nick name', function(nick) {
        for(key in nicks) {
            if (key == nick) {
                socket.emit('not available', 'nickname is not available')
            }
        }
        nicks[nick] = socket.id;
    })
    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
    });

    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', function() {
        console.log('user disconnected');
        for(getOut in nicks) {
            if (nicks[getOut] == socket.id) {
                console.log(getOut + ' disconected');
                io.emit('get out', getOut);
            }
            
            console.log(nicks);
        }
    });
    console.log(nicks);
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
