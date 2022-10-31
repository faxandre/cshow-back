const router = require('express').Router();
const movieController = require('./controllers/MovieController');

router.all('/movie', movieController);
router.all('/movie/*', movieController);
//router.all('/notafiscal', notafiscalController);
//router.all('/contrato', contratoController);

module.exports = router;