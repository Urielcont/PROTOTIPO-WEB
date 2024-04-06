const express = require("express");
const logout = require("../controller/controller.js");
const userFound = require("../controller/controller.js");
const usuario = require("../controller/controller.js");
const perfil = require("../controller/controller.js");
const userController = require("../controller/controller.js");
const ph = require("../controller/ph.controller.js");
const turbidez = require("../controller/turbidez.controller.js");
const flujo= require("../controller/flujo.controller.js");
const usuarioController = require("../controller/controller.js");
const router =express.Router();
const { authRequired } = require('../middleware/validarToken.js');
const { validarSchema } = require('../middleware/validate.middleware.js');
const { registerSchema } = require('../schemas/auth.schema.js');
const { loginSchema } = require('../schemas/auth.schema.js');
const {verifyToken} =require('../controller/controller.js')

router.post('/registrar',validarSchema(registerSchema),usuario.registrar);
router.post('/login',validarSchema(loginSchema),userFound.login);
router.post('/logout',logout.logout);
router.post('/ph',ph.subirPH);
router.post('/turbidez',turbidez.subirTurbidez);

router.get('/verify', verifyToken);
router.get('/usuarios', userController.getAllUsers);
router.get('/perfil', authRequired, perfil.perfil);
router.get('/usuario', authRequired, usuario.usuario);

// PH
// router.get('/MostrarPh/:filtro',ph.MostrarPh)
router.get('/ph',ph.MostrarUltimoPH);
// FLUJO
router.get('/flujo',flujo.MostrarUltimoFlujo);
router.get('/MostrarFlujo',flujo.MostrarFlujo)

router.get('/turbidez',turbidez.MostrarUltimaTurbidez);

router.put('/bajaUsuario/:iduser', userFound.bajalogicaUser);
router.get("/usuarios/eliminados", usuarioController.getDeletedUsers);

module.exports = router;