let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PostSchema = new Schema({
    text: String,
    date: Date,
    //postAuthor: mongoose.Schema.Types.ObjectId
    postAuthor: Number
});

module.exports = mongoose.model('Post', PostSchema);