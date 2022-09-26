const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
const app = require("../app");
const validations = require("../middlewares/validations");
const recuerdameMiddleware = require("../middlewares/recordarUsuario");
const guestMiddleware = require("../middlewares/guestMiddleware");
const nombreFile = require("../middlewares/nombreFile");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/images/users"));
  },
  filename: function (req, file, cb) {
    console.log(file);
    let filex =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    console.log(filex);
    cb(null, filex);
  },
});

const upload = multer({ storage });


// router.get("/check", usersController.check);
router.get("/register",guestMiddleware, usersController.agregarUsuario);
router.post("/register", upload.single("imagenPerfil"),validations, usersController.store);

router.get("/login",guestMiddleware, usersController.login);
router.post("/login",usersController.logearse);


router.get("/usuarios", usersController.profile);


module.exports = router;




