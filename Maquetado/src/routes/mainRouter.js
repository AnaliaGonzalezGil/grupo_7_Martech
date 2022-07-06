const express = require("express");
const router = express.Router();
const path = require("path");
//const app = express();

const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get("/carrito", mainController.carrito);
router.get("/login", mainController.login);
router.get("/register", mainController.register);

module.exports = router;
