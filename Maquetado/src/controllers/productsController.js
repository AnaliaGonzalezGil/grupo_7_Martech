const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../database/inventario.json");
let inventario = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    res.render("products", { inventario });
  },

  // Detail - Detail from one product
  detalle: (req, res) => {
    let idProducto = req.params.id;
    let product;
    for (let i = 0; i < inventario.length; i++) {
      if (inventario[i].id == idProducto) {
        product = inventario[i];
      }
    }
    res.render("detalle", { product });
  },

  // Create - Form to create
  agregarProductos: (req, res) => {
    res.render("agregarProductos");
  },

  // Create -  Method to store
  store: (req, res) => {
    let product = req.body;
    product.imgIndex = req.file.filename;
    product.id = inventario.length + 1;
    inventario.push(product);
    fs.writeFileSync(productsFilePath, JSON.stringify(inventario), "utf-8");
    res.redirect("/products");
  },

  // Update - Form to edit
  editar: (req, res) => {
    let id = req.params.id;
    globalThis.productToEdit = null;
    for (let i = 0; i < inventario.length; i++) {
      if (inventario[i].id == id) {
        productToEdit = inventario[i];
      }
    }
    res.render("editarProductos", { productToEdit });
  },
  // Update - Method to update
  update: (req, res) => {
    let id = productToEdit.id;
    let product = req.body;
    console.log(product);
    for (let i = 0; i < inventario.length; i++) {
      if (inventario[i].id == id) {
        inventario[i].nombreProducto = req.body.nombreProducto;
        inventario[i].precioVenta = req.body.precioVenta;
        inventario[i].marca = req.body.marca;
        inventario[i].estadoEquipo = req.body.estadoEquipo;
        inventario[i].memoriaRam = req.body.memoriaRam;
      }
    }
    fs.writeFileSync(productsFilePath, JSON.stringify(inventario), "utf-8");
    res.redirect("/products/");
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    let id = req.params.id;
    console.log(id);
    inventario = inventario.filter(function (product) {
      return product.id != id;
    });
    fs.writeFileSync(productsFilePath, JSON.stringify(inventario), "utf-8");
    res.redirect("/products");
  },
};

module.exports = controller;
// module.exports = productsFilePath;
