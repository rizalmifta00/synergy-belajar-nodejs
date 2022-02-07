const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema({
    title: { type: String },
    description: { type: String },
    price: { type: Number },
})

const Product = Mongoose.model('product', Schema)

module.exports = Product