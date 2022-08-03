const{Router}= require('express');

const router= Router();

//const empleadosCtrl= require('../controllers/empleados.controller'); <--- No es requerido
const autosCtrl= require('../controllers/autos.controller');

//Consultar todos los autos
router.get('/autos/',autosCtrl.getAutos);
//Consultar Auto
router.get('/autos/:id',autosCtrl.getAuto);
//Crear Auto
router.post('/autos/',autosCtrl.createAuto);
//Actualizar Auto
router.put('/autos/:id',autosCtrl.editAuto);
//Eliminar Auto
router.delete('/autos/:id',autosCtrl.deleteAuto);

module.exports= router;

