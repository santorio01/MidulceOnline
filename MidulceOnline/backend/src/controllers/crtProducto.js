const crtProdcuto = {};
const producto = require ('../models/producto');
//metodo crud

//crear
crtProdcuto.save = async (req,res)=>{
    await producto
    .create(req.body)
    .then(data => res.json(data))
    .catch(err=> res.json(err))
}
//listar todos los productos
crtProdcuto.buscar = async (req,res)=>{
    await producto
    .find()
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}
//eliminar objeto por find
crtProdcuto.delete = async (req,res)=>{
    let id = req.params.id
    await producto
    .deleteOne({_id:id})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}
//Modificar por body
crtProdcuto.update = async  (req,res)=>{
    const {_id, ...body}=req.body
    await producto
    .updateOne({_id:_id},{$set:body})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}
module.exports = crtProdcuto;