const express = require("express");
const router = express.Router();
const marcasController = require("../../controllers/api/marcasController");
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
const app = require("../../app");
const validations = require("../../middlewares/validations");
const recuerdameMiddleware = require("../../middlewares/recordarUsuario");
const guestMiddleware = require("../../middlewares/guestMiddleware");
const nombreFile = require("../../middlewares/nombreFile");


router.get("/marcas", marcasController.profile);

module.exports = router;
