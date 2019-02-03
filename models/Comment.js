let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CommentSchema = new Schema({
    //commentAuthor: mongoose.Schema.Types.ObjectId,
    commentAuthor: Number,
    text: String,
    date: Date,
    //post: mongoose.Schema.Types.ObjectId
    post: Number

});

module.exports = mongoose.model('Comment', CommentSchema);