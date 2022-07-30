const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
const app = require("../app");
const validations = require("../middlewares/validations");
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



router.get("/register", usersController.register);
router.post("/register", upload.single("imagendePerfil"),validations, usersController.store);

router.get("/login", usersController.login);
router.post("/login", usersController.procesoLogin);


// router.get("/profile/:userID", usersController.profile);


module.exports = router;



