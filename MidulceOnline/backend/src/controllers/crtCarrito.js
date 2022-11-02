const ctrCarrito = {};
const carrito = require ('../models/carrito');
//Metodos de CRUD
//Crear
ctrCarrito.save = async (req,res) =>{
    await carrito
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
//read
ctrCarrito.buscar = async (req,res)=>{
    await carrito
    .find()
    .then(data =>res.json(data))
    .catch(err =>res.json(err))
}
//delete por id
ctrCarrito.delete = async (req,res)=>{
    let id=req.params.id
    await carrito
    .deleteOne({_id:id})
    .then(data =>res.json(data))
    .catch(err=>res.json(err))
}
//update
ctrCarrito.update = async (req,res)=>{
    const {_id, ...body}=req.body;
    await carrito
    .updateOne({_id: _id},{$set:body})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}

module.exports = ctrCarrito;
