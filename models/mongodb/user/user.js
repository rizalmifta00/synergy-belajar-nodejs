// const { Int32 } = require('mongodb')
const Mongoose = require('mongoose');

var Schema = new Mongoose.Schema({
    username:{ type: String },
    email : { type: String},
    password:{ type: String},
    fullname : {type: String},
    age  : { type : Number},
    description:{ type: String }
});

const User = Mongoose.model('user', Schema);

module.exports = User