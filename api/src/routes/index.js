const { Router } = require('express');
// Importar todos los routers;
const dog = require('../routes/dog');
const dogtemperament = require('../routes/dogtemperament');


const router = Router();

// Configurar los routers
router.use('/dog', dog);
router.use('/dogtemperament', dogtemperament);


module.exports = router;
