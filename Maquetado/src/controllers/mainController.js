const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const { Op } = require("sequelize");
const moment = require('moment')

const productsFilePath = path.join(__dirname, "../database/inventario.json");
let inventario = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
  'premium': (req, res) => {

let promesas = [
  db.Marca.findAll({
    order: [
      ["nombre"]
    ],
       include: [{
        model : db.Product, 
        as : "products",
        attributes: ['id_marca'], 
        required: false  
      }]    
  }),
  db.Product.findAll({
       order : [
            ['id', 'DESC']
            ],
      //   include: [{
      //   model : db.Marca, 
      //   as : "marca",
      //   attributes: ['id_marca'], 
      //   required: false  
      // }]      
      })
]
Promise.all(promesas)
    .then(function([marcas,products]){ // si queremos meterle otra promesa, va post marcas con ,
      res.render("index", { products,marcas })
    })

},
  index: function (req, res) {
    let products = inventario; //CAMBIAR POR LA BASE DE DATOS
    res.render("index", { products });
  },
  carrito: function (req, res) {
    res.render("carrito");
  },

  login: function (req, res) {
    res.render("login");
  },
  register: function (req, res) {
    res.render("register");
  },
};

module.exports = mainController;
