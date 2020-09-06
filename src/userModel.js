const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let UserSchema = new Schema({
    name: {type: String, required:true, max: 100},
    email : {type: String, required:true, max: 30},
    password: {type: String, required:true, max: 20}
});
module.exports = mongoose.model('User', UserSchema);
