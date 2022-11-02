const express = require ('express');
const router = express.Router();
const crtCalificacion = require ('../controllers/crtcalificacion')

//ruta para guardar
router.post('/calificacion', crtCalificacion.save)
//ruta para buscar todo
router.get('/calificacion', crtCalificacion.buscar)
//eliminar por id
router.delete('/calificacion/:id',crtCalificacion.delete)
//update por id
router.put('/calificacion',crtCalificacion.update)
module.exports = router;