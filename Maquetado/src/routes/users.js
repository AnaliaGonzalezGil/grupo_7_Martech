const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
const app = require("../app");
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
const validations = [
  body("nombre").notEmpty().withMessage("Tienes que escribir un nombre"),
  body("apellido").notEmpty().withMessage("Tienes que escribir un apellido"),
  body("email").isEmail().withMessage("Tienes que escribir un correo válido"),
  body("password").notEmpty().withMessage("Escribe tu contraseña"),

]
const upload = multer({ storage });

router.get("/register", usersController.register);
router.post("/register", upload.single("imagendePerfil"),validations, usersController.store);

// router.post("/users/register", usersController.store);

router.get("/login", usersController.login);

router.get("/profile/:userID", usersController.profile);


module.exports = router;

