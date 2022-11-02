const express = require ('express');
const router = express.Router();
const crtCliente = require ('../controllers/crtCliente')

//ruta CRUD
router.post('/cliente', crtCliente.save);
//ruta para listar
router.get('/cliente',crtCliente.mostrar)
//ruta delete for id
router.delete('/cliente/:id',crtCliente.delete)
//ruta update
router.put('/cliente',crtCliente.update)




module.exports = router;