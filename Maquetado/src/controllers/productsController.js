const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const { Op } = require("sequelize");
const moment = require('moment')

sequelize = db.sequelize,
Sequelize = db.Sequelize;

// const productsFilePath = path.join(__dirname, "../database/inventario.json");
// let inventario = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const Products = db.Product;

const productsController = {
    
    // 'detail': (req, res) => {
    //     db.Product.findByPk(req.params.id,
    //         {
    //             include : ['marca']
    //         })
    //         .then(products => {
    //             res.render('products.ejs', {products});
    //         });
    // },
    
    'list': (req, res) => {
        db.Product.findAll()
        .then(function(products){
            return res.render("products",{products})
        })
    
    },
    
    // 'recomended': (req, res) => {
    //     db.Product.findAll({
    //         include: ['marca'],
    //         where: {
    //             rating: {[db.Sequelize.Op.gte] : 8}
    //         },
    //         order: [
    //             ['rating', 'DESC']
    //         ]
    //     })
    //         .then(products => {
    //             res.render('recommendedMovies.ejs', {products});
    //         });
    // },
  // Root - Show all products
  // index: (req, res) => {
  //   res.render("products", { inventario });
  // },

  // Detail - Detail from one product

  
  // detalle: (req, res) => {
  //   let idProducto = req.params.id;
  //   let product;
  //   for (let i = 0; i < inventario.length; i++) {
  //     if (inventario[i].id == idProducto) {
  //       product = inventario[i];
  //     }
  //   }
  //   res.render("detalle", { product });
  // },

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
  },}

//   // Update - Form to edit
//   editar: (req, res) => {
//     let id = req.params.id;
//     globalThis.productToEdit = null;
//     for (let i = 0; i < inventario.length; i++) {
//       if (inventario[i].id == id) {
//         productToEdit = inventario[i];
//       }
//     }
//     res.render("editarProductos", { productToEdit });
//   },
//   // Update - Method to update
//   update: (req, res) => {
//     let id = productToEdit.id;
//     for (let i = 0; i < inventario.length; i++) {
//       if (inventario[i].id == id) {
//         inventario[i].nombreProducto = req.body.nombreProducto;
//         inventario[i].precioVenta = req.body.precioVenta;
//         inventario[i].marca = req.body.marca;
//         inventario[i].estadoEquipo = req.body.estadoEquipo;
//         inventario[i].memoriaRam = req.body.memoriaRam;
//       }
//     }
//     fs.writeFileSync(productsFilePath, JSON.stringify(inventario), "utf-8");
//     res.redirect("/products/");
//   },

//   // Delete - Delete one product from DB
//   destroy: (req, res) => {
//     let id = req.params.id;
//     console.log(id);
//     inventario = inventario.filter(function (product) {
//       return product.id != id;
//     });
//     fs.writeFileSync(productsFilePath, JSON.stringify(inventario), "utf-8");
//     res.redirect("/products");
//   },
// };

module.exports = productsController;
// module.exports = productsFilePath;
