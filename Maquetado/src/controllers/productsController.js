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
        db.Marca.findAll()
        db.Product.findAll()
        .then(function(products, marcas)
        {
            return res.render("products",{products,marcas})
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
      return res.redirect("/")})
      .catch(error => res.send(error))
  },
  edit: function(req,res) {
    let productsId = req.params.id;
    let promProducts = Products.findByPk(productsId);

    Promise
    .all([promProducts])
    .then(([Product]) => {

        return res.render(path.resolve(__dirname, '..', 'views',  'editarProductos'), {Product})})
    .catch(error => res.send(error))
},
update: function (req,res) {
    let productsId = req.params.id;
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
        {
            where: {id: productsId}
        })
    
    .then(()=> {  
        return res.redirect('/')})            
    .catch(error => res.send(error))
},
destroy: function (req,res) {
  let productsId = req.params.id;
    Products
  .destroy({where: {id: productsId}, force: true}) // force: true es para asegurar que se ejecute la acción
  .then(()=>{
      return res.redirect('/')})
  .catch(error => res.send(error)) 
}
}




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
