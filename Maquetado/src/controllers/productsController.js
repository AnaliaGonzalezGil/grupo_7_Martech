const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const { Op } = require("sequelize");
const moment = require('moment')
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

const Products = db.Product;

const productsController = {
    
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id,
            // {
            //     include : ['id']
            // })
            )
            .then(products => {
                res.render('detalle.ejs', {products});
            });
    },
    'list': (req, res) => {
        db.Product.findAll()
        .then(function(products){
            return res.render("products",{products})
        })
    
    },

  // Create - Form to create
  agregarProductos: function (req, res) {
    let todoProductos = Products.findAll();

    Promise
    .all([todoProductos])
    .then(([allProducts]) =>{
      return res.render("agregarProductos",{allProducts} )})
    .catch(error => res.send(error));
  },
  create: (req, res) => {
      Products
      .create(
      {
  id_marca : req.body.id_marca,
  id_color : req.body.id_color,
  id_os : req.body.id_os,
  imgIndex : req.file.filename,
  nombreProducto : req.body.nombreProducto,
  precioVenta : req.body.precioVenta,
  estadoEquipo : req.body.estadoEquipo,
  memoriaRam : req.body.memoriaRam
    }
  )
    .then((respuesta)=> {
      return res.redirect("products")})
      .catch(error => res.send(error))
  },
  edit: function(req,res) {
    let productsId = req.params.id;
    let promProducts = Products.findByPk(productsId);

    Promise
    .all([promProducts])
    .then(([Product]) => {
        //Movie.release_date = moment( new Date(Movie.release_date)).toLocaleDateString();
        // Product.release_date = moment(Movie.release_date).locale('es-us').format('YYYY-MM-DD');
        //new Date("Sun Jan 03 1999 21:00:00 GMT-0300 (hora estándar de Argentina)").toLocaleDateString()
        //return res.send(Movie.release_date);
        return res.render(path.resolve(__dirname, '..', 'views',  'editarProductos'), {Product})})
    .catch(error => res.send(error))
},
update: function (req,res) {
    // let productsId = req.params.id;
    Promise
    Products
    .update(
        {
          id_marca : req.body.id_marca, 
          id_color : req.body.id_color,
          id_os : req.body.id_os,
          nombreProducto : req.body.nombreProducto,
          precioVenta : req.body.precioVenta,
          estadoEquipo : req.body.estadoEquipo,
          memoriaRam : req.body.memoriaRam
        },
        // {
        //     where: {id: productsId}
        // })
    )
    .then(()=> {
        return res.redirect('/index')})            
    .catch(error => res.send(error))
},
}

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
