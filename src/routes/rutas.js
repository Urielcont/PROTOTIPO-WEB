const express = require("express");
const logout = require("../controller/controller.js");
const userFound = require("../controller/controller.js");
const usuario = require("../controller/controller.js");

const ph = require("../controller/ph.controller.js");
const turbidez = require("../controller/turbidez.controller.js");
const router =express.Router();
router.post('/registrar',usuario.registrar);
router.post('/login',userFound.login);
router.post('/logout',logout.logout);
router.post('/ph',ph.subirPH);
router.post('/turbidez',turbidez.subirTurbidez);
// router.get('/ph',ph.subirPH);
// router.get('/turbidez',turbidez.MostrarTurbidez);

module.exports = router;