const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../database/inventario.json");
let inventario = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
  index: function (req, res) {
    let products = inventario;
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
