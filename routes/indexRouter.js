const express = require('express');
const router = express.Router();

const indexControllers = require('../controllers/indexController');

const autentica = require('../middlewares/authMiddlewares')

router.get('/', indexControllers.indexRouter)

module.exports = router;