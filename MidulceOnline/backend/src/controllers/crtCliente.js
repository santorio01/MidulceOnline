const crtCliente ={};
const cliente = require('../models/cliente');
//metodos de Crud
//Metodo create
crtCliente.save = async (req,res) =>{
    await cliente
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
//Metodo de listar
crtCliente.mostrar = async (req,res)=>{
    await cliente
    .find()
    .then(data=> res.json(data))
    .catch(err=>res.json(err))
}
//metodo de eliminar por id
crtCliente.delete = async  (req,res)=>{
    let id=req.params.id
    await cliente
    .deleteOne({_id:id})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}
//update
crtCliente.update = async (req,res)=>{
    const {_id, ...body}=req.body;
    await cliente
    .updateOne({_id: _id},{$set:body})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}

module.exports = crtCliente;