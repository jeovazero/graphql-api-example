const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    author: {
        type: String, default: "annon"
    },
    text: {
        type: String
    }
});

module.exports = mongoose.model('Post', Post);

