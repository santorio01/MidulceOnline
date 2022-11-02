const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre : {type: String, require: true},
    telefono : {type: Number, require: true},
    email : {type: String, require: true},
    ciudad : {type: String},
    direccion : {type: String, require: true},

},{
    timestamps : true,

})
module.exports = mongoose.model('cliente',clienteSchema)