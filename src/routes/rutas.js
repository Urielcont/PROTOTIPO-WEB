const express = require("express");

const controlador = require("../controller/controller.js");

const router =express.Router();
// ---------RUTA PARA USUARIOS---------
// Ruta para registrarse
router.post('/registrarse',controlador.registrar);
router.get('/registrarse',controlador.Mostrarusuario);

module.exports = router;