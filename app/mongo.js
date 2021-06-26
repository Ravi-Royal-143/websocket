var mongoose = require('mongoose');
const pass = process.env.mongoConnect || '';
const buf = Buffer.from(pass, 'base64').toString('ascii');

var mongoDB = `mongodb+srv://ravi:${buf}@raviroyal.pcedi.mongodb.net/royal?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

module.exports = mongoose;