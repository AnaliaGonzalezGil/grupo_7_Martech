const express = require("express");
const router= express.Router();
const path = require("path");
//const app = express();

const mainController = require("../controllers/mainController");

router.get("/detalle",mainController.index);
router.get("/",mainController.index);
router.get("/carrito",mainController.carrito);
router.get("/login",mainController.login);
router.get("/detalle/:celularesId?",mainController.detalle);
router.get("/register",mainController.register);
router.get("/agregar",mainController.agregarProductos);
router.get("/editar",mainController.editarProductos);

module.exports = router;

