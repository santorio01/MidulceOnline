const mongoose = require('mongoose');

const detalleCompra = new mongoose.Schema({
    valorCompra : {type: Number, require: true},
    numCompra : {type: Number, require: true},
    totalProduct : {type: Number, require: true},
},{
    timestamps : true,

})
module.exports = mongoose.model('detalleCompra',detalleCompra)
