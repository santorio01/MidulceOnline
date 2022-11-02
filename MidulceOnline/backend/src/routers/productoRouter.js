const express = require ('express');
const router = express.Router();
const crtProdcuto = require ('../controllers/crtProducto')

//ruta CRUD
router.post('/producto', crtProdcuto.save);
router.get('/producto', crtProdcuto.buscar);
router.delete('/producto/:id', crtProdcuto.delete);
router.put('/producto', crtProdcuto.update);



module.exports = router;