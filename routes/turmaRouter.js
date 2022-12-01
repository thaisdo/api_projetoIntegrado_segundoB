const express = require('express');
const router = express.Router();
const turmaController = require('../controllers/turmaController');
const autentica = require('../middlewares/authMiddlewares');

const app = express();

router.get('/', autentica, turmaController.listarTurma);

router.get('/:id', autentica, turmaController.listarTurmaPorId);

router.put('/:id', autentica,turmaController.atualizarTurma);

router.post('/', autentica, turmaController.criarTurma);

module.exports = router;