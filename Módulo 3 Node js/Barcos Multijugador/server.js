const express = require('express');
const path = require('path');
const http = require('http');
const PORT= process.env.PORT||3000;
const socket = require('socket.io');
const app = express();
const server = http.createServer(app);
const io= socket(server);

app.use(express.static(path.join(__dirname,"public")));

server.listen(PORT,()=>{
    console.log("El servidor está corriendo");
});

const conection = [null, null];

io.on('connection', socket =>{
    let playerIndex= -1;
    for(const i in conection){
        if(conection[i]===null){
            playerIndex = i
            break;
        }
    }

    socket.emit("player-number", playerIndex);
    console.log(`Jugador ${playerIndex} se ha conectado`);

    if(playerIndex=== -1) return;
    conection[playerIndex] = false;

    socket.broadcast.emit('player-connection', playerIndex);

    socket.on('disconnect',()=>{
        console.log(`Jugador ${playerIndex} se ha desconectado`);
        conection[playerIndex]=null;
        socket.broadcast.emit('player-connection', playerIndex);
    });

    socket.on('player-ready', ()=>{
        socket.broadcast.emit('enemy-ready', playerIndex);
        conection[playerIndex]=true;
    });

    socket.on('check-players', ()=>{
        const players= [];
        for(const i in conection){
            conection[i]=== null ? 
                players.push({connected:false,ready: false}):
                players.push({connected: true, ready: conection[i]});
        }
        socket.emit('check-players', players)
    });

    socket.on('fire', id =>{
        console.log(`Disparo de ${playerIndex}`, id);
        socket.broadcast.emit('fire', id);
    });

    socket.on('fire-replay', square =>{
        console.log(square);
        socket.broadcast.emit('fire-replay', square);
    });

    setTimeout(()=>{
        conection[playerIndex]=null;
        socket.emit('timeout');
        socket.disconnect();
    }, 60000);

});

