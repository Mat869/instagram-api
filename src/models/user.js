const mongoose = require('mongoose');

const user = new mongoose.model('User', {
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: String,
    createdAt: {
        type: Date,
        default: () => { return new Date(); }
    } 

});
