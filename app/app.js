
const express = require('express');
const cors = require('cors');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
    cors: {
        origins: ['*']
    }
});

app.use(cors());

io.on('connection', (socket) => {
    console.log("ASdad start")
    socket.on('message', (msg) => {
        console.log('on mess')
        socket.broadcast.emit('message-broadcast', msg);
    });
});

module.exports = {
    app,
    http
};