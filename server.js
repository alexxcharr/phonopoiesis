var count = 0;
var users = [];

var express = require('express'); //importing module

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));  //users can see public
console.log("My socket server is running");
var socket = require('socket.io'); //import

var io = socket(server);  //keeps track ins n outs

io.sockets.on('connection', newConnection); //connection event

function newConnection(socket) {  //triggered with new socket connections
 socket.on('coo', msgA); //triggered when theres msg
 socket.on('stop', msgStop); //triggered when theres msg
 users.push(socket.id); //add id to array
  socket.on('disconnect', function() {
    for (let i = 0; i < users.length; i++) {   //remove disconnected ones
      if (users[i] == socket.id ) {
        users.splice(i, 1);
      }
    }
  })
  io.sockets.emit('arUsers', users);  //sending users id to everyone!

 function msgA(data) {  //logs the msg on the server
   socket.broadcast.emit('coo', data ); //msg send out
 }
 function msgStop(data) {  //logs the msg on the server
   socket.broadcast.emit('stop', data); //msg send out
 }
}
