const express = require ('express');
const router = express.Router();
const ctrCarrito = require ('../controllers/crtCarrito')

//ruta para guardar
router.post('/carrito', ctrCarrito.save)
//ruta para buscar todo
router.get('/carrito', ctrCarrito.buscar)
//eliminar por id
router.delete('/carrito/:id',ctrCarrito.delete)
//update por id
router.put('/carrito',ctrCarrito.update)
module.exports = router;