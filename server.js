
var express = require('express'); //importing module

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));  //users can see public
console.log("My socket server is running");

var socket = require('socket.io'); //import

var io = socket(server);  //keeps track ins n outs

io.sockets.on('connection', newConnection); //connection event

function newConnection(socket) {  //triggered with new socket connections
 console.log('new connection: ' + socket.id);

 socket.on('mouse', mouseMsg); //triggered when theres msg

 function mouseMsg(data) {  //logs the msg on the server
   socket.broadcast.emit('mouse', data); //msg send out
   console.log(data);
 }

}
