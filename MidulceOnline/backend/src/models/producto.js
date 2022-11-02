const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre : {type: String, require: true},
    precio : {type: Number, require: true},
    imgProducto : {type: String, require: true},
    descripcion : {type: String},

},{
    timestamps : true,

})
module.exports = mongoose.model('producto',productoSchema)
