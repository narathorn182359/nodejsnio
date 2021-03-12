/* let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
 
io.on('connection', (socket) => {
 
  socket.on('disconnect', function(){
    io.emit('users-changed', {user: socket.username, event: 'left'});   
  });
 
  socket.on('set-name', (name) => {
    socket.username = name;
    io.emit('users-changed', {user: name, event: 'joined'});    
  });
  
  socket.on('send-message', (message) => {
    io.emit('message', {
        msg: message.text, 
        img: message.img,
        user: socket.username, 
        owner_room: message.owner_room,
        chat_partner: message.chat_partner,
        coderoom: Number(message.owner_room)+Number(message.chat_partner),
        coderoomgroup:message.coderoomgroup,
        name_thai: message.name_thai,
        img_send: message.img_send,
        img_send_name: message.img_send_name,
        createdAt: new Date()
      });    
  });
});
 
var port = process.env.PORT || 3001;
 
server.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});
 */

const express = require("express");
const WebSocket = require("ws");
const app = express();

app.get("/", (req, res) => {
  const url = "ws://34.87.63.155:8080/feedService/productPrice";
  const connection = new WebSocket(url);
  connection.onmessage = (e) => {
    res.send(e.data);
  };
});

app.listen(3000, () => {
  console.log("Start server at port 3000.");
});
