
const express = require('express');
const cors = require('cors');
const path = require("path");

const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
    cors: {
        origins: ['*']
    }
});

app.use(cors());
app.use("/images", express.static(path.join("images")));

io.on('connection', (socket, req) => {
    // var authorization = req.headers.authorization.split(' ')[1];
    console.log(req)
    socket.on('message', (msg) => {
        socket.broadcast.emit('message-broadcast', msg);
    });
});

app.use('/post', require('../routes/posts'));

module.exports = {
    app,
    http
};