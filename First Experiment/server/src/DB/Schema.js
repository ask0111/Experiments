

const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Collection = mongoose.model(userAuth ,Schema);

module.exports = Collection;