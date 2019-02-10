let mongoose = require('mongoose');
let Schema = mongoose.Schema;
require('mongoose-type-email');

let UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surName: {
        type: String,
        required: true
    },
    yearOfBorn: Number,
    about: String,
    nickName: String,
    login: {
        type: mongoose.SchemaTypes.Email
        //cant set required
        //required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);