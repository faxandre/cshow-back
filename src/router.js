const router = require('express').Router();
const filmeController = require('./controllers/FilmeController');

router.all('/filme', filmeController);
router.all('/filme/*', filmeController);
//router.all('/notafiscal', notafiscalController);
//router.all('/contrato', contratoController);

module.exports = router;