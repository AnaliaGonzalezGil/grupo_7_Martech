const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/api/productsController");
const multer = require("multer");
const path = require("path");





const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/images/products"));
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

/*** GET ALL PRODUCTS ***/


/*** CREATE ONE PRODUCT ***/
// router.get("/agregar", productsController.agregarProductos);
// router.post("/", upload.single("productImage"), productsController.create);

// /*** GET ONE PRODUCT ***/
// router.get("/detalle/:id", productsController.detail);

// /*** EDIT ONE PRODUCT ***/
// router.get("/editar/:id", productsController.edit);
// router.put("/editar/:id", productsController.update);

// /*** DELETE ONE PRODUCT***/
// router.delete("/:id", productsController.destroy);


router.get("/products", productsController.todos);
router.get("/products/detalle/:id", productsController.detalle);
router.get("/products/total", productsController.total);

module.exports = router;
