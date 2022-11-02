const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
    cliente : {type: String, require: true},
    email : {type: String, require: true},
    fechaCpmpra : {type: Date, require: true, default:Date.now()},
    productos : {type: String},
pagado : {type: Boolean, default:false},

},{
    timestamps : true,

})
module.exports = mongoose.model('carrito',carritoSchema)
