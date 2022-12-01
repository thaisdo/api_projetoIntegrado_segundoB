const express = require("express");

const controller = require("../controllers/usuarioController");

const router = express.Router();

const app = express();

router.post("/sign", controller.registrar);

router.post("/login", controller.login);

module.exports = router;