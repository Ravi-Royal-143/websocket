var {app, http} = require('./app');
require('dotenv').config();
const port = process.env.PORT || 3001;
console.log(process.env.pass)
var mongoose = require('./mongo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get("/working", (req, res) => {
    res.send("working")
});

app.get("/", (req, res) => {
    res.send("okay")
});

http.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});