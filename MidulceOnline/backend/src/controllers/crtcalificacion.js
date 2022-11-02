const crtCalificacion = {};
const calificacion = require ('../models/calificacion');
//Metodos de CRUD
//Crear
crtCalificacion.save = async (req,res) =>{
    await calificacion
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
//read
crtCalificacion.buscar = async (req,res)=>{
    await calificacion
    .find()
    .then(data =>res.json(data))
    .catch(err =>res.json(err))
}
//delete por id
crtCalificacion.delete = async (req,res)=>{
    let id=req.params.id
    await calificacion
    .deleteOne({_id:id})
    .then(data =>res.json(data))
    .catch(err=>res.json(err))
}
//update
crtCalificacion.update = async (req,res)=>{
    const {_id, ...body}=req.body;
    await calificacion
    .updateOne({_id: _id},{$set:body})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}


module.exports = crtCalificacion;
