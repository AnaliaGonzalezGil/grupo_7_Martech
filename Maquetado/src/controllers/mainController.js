const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/inventario.json');
let inventario = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const  mainController={
    index: function(req,res){ 
        let products = inventario;
        res.render("index",{products}) 
    },
    carrito: function(req,res){ 
        res.render("carrito") 
    },
    /*detalle: function(req,res){ 
        res.render("detalle") 
    },*/
    detalle: (req, res) => {
        let celulares = inventario.find(celulares => celulares.id == req.params.celularesId);
        console.log(celulares)
        res.render("detalle", { celulares: celulares });
    },
    login: function(req,res){ 
        res.render("login") 
    },
    register: function(req,res){ 
        res.render("register") 
    },
    agregarProductos: function(req,res){ 
        res.render("agregarProductos") 
    },
    // editarProductos: function(req,res){ 
    //     res.render("editarProductos") 
    //     let celulares = inventario.find(celulares => celulares.id == req.params.celularesId);
    //     console.log(celulares)
    //     res.render("detalle", { celulares: celulares });
    // },
    products: function(req,res){ 
        let products = inventario		
		res.render("products", {products: products}) 
    },
}

module.exports = mainController;