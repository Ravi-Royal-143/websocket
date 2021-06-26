const mongoose = require('mongoose');

const { Schema } = mongoose;


const chatDataSchema = new Schema({
    gmail: {
        type: String,
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const chatDataModel = mongoose.model('chatData', chatDataSchema);

module.exports = chatDataModel;