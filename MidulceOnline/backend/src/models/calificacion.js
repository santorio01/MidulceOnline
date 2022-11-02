const mongoose = require('mongoose');

const calificacionSchema = new mongoose.Schema({
    nombreUsuario : {type: String, require: true},
    calificacion  : {type: Number, require: true},
    producto : {type: String, require: true},

},{
    timestamps : true,

})
module.exports = mongoose.model('calificacion',calificacionSchema)