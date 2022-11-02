const crtDetalleCompra ={};
const detalleCompra = require('../models/detalleCompra');
//metodos de Crud
//Metodo create
crtDetalleCompra.save = async (req,res) =>{
    await detalleCompra
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
//Metodo de listar
crtDetalleCompra.mostrar = async (req,res)=>{
    await detalleCompra
    .find()
    .then(data=> res.json(data))
    .catch(err=>res.json(err))
}
//metodo de eliminar por id
crtDetalleCompra.delete = async  (req,res)=>{
    let id=req.params.id
    await detalleCompra
    .deleteOne({_id:id})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))

}

//update
crtDetalleCompra.update = async (req,res)=>{
    const {_id, ...body}=req.body;
    await detalleCompra
    .updateOne({_id: _id},{$set:body})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}




module.exports = crtDetalleCompra;
