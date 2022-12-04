// un socket entabla comunicación bidireccional basada en eventos entre servidor y cliente (como una llamada de teléfono)
const express = require('express');
const app = express();
const http = require('http');
const server= http.createServer(app);

const{Server} = require('socket.io');
const io = new Server(server);

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/templates/index.html');
});

io.on('connection',(socket)=>{
    console.log("Un usuario se ha conectado al chat");

    socket.on('chat message',(msg)=>{
        io.emit('chat message', msg);
    });
    socket.on('disconnect', ()=>{
        console.log("El usuario se ha desconectado del chat");
    });
});

server.listen("8080", ()=>{
    console.log("Escuchando en el puerto 8080");
});