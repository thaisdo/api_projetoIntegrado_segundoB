const express = require('express');
const router = express.Router();
const mensalidadeController = require('../controllers/mensalidadeController');
const autentica = require('../middlewares/authMiddlewares');

const app = express();

router.get('/', autentica, mensalidadeController.listarMensalidade );

router.get('/:id', autentica, mensalidadeController.listarMensalidadePorId );

router.put('/:id', autentica,mensalidadeController.atualizarMensalidadePorId);

router.post('/', autentica, mensalidadeController.criarMensalidade);

router.delete('/:id', autentica, mensalidadeController.deletarMensalidade);

module.exports = router;