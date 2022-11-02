const express = require ('express');
const router = express.Router();
const crtDetalleCompra = require ('../controllers/crtDetalleCompra')

//ruta para guardar
router.post('/detalleCompra', crtDetalleCompra.save)
//ruta para listar
router.get('/detalleCompra',crtDetalleCompra.mostrar)
//ruta delete for id
router.delete('/detalleCompra/:id',crtDetalleCompra.delete)
//ruta update
router.put('/detalleCompra',crtDetalleCompra.update)
module.exports = router;