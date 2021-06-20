
const express = require('express');
const cors = require('cors');
const port = 3001;


const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
    cors: {
        origins: ['*']
    }
});

app.use(cors());

io.on('connection', (socket) => {
    socket.on('message', (msg) => {
        socket.broadcast.emit('message-broadcast', msg);
    });
});


http.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});