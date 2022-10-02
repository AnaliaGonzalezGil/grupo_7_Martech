const express = require("express");
const router = express.Router();
const productsControllerApi = require("../../controllers/api/productsController");
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
const app = require("../../app");
const validations = require("../../middlewares/validations");
const recuerdameMiddleware = require("../../middlewares/recordarUsuario");
const guestMiddleware = require("../../middlewares/guestMiddleware");
const nombreFile = require("../../middlewares/nombreFile");



router.get("/products", productsControllerApi.todos);
router.get("/products/detalle/:id", productsControllerApi.todos);


module.exports = router;
