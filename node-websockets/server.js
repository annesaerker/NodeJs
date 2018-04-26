// COPY PASTED FROM SOCKET.IO
var app = require('express')();
// http bulit on top app 
var http = require('http').Server(app);
// io bulit on top http
var io = require('socket.io')(http);
var fs = require('fs');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//new route
// app.get('/trigger', function(req,res){
//     fs.readFile(__dirname + '/data.txt', 'utf8', function(err, sData){
//         console.log(sData)
//         // on reload it gets data from txt file
//         io.emit('this is the data', {"status":sData})
//         res.send('DONE')
//     })
// })

// Everytime you see io it is a socket io(input/output)
// io is everybody - broadcast
// What is the specifik browser?
// SERVER CONNECTION
io.on('connection', function(socket){
  console.log('a user connected');
  // 'this is the data' you can write what you want it's like a sendData/getData function
  // emit talks - sends message to everyone
  // io.emit('this is the data', {"status":"ok"}) 

    console.log(socket.id)

// on listens - You cant listen to everybody. So you listen to the specifik socket
  socket.on('client clicked on button', function(jData){
    console.log(jData)
      // Everyone, execpt the one that started the socket call
  socket.broadcast.emit('this is the data', {"status":"ok"})
})
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});