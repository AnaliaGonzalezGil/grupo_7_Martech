
// const listaProductos=[

//     {id: 1,
//     nombreProducto:"Iphone Principal",
//     img:"iphone-frente2.png",
//     precioVenta:600,
//     oferta: true,
//     descuento: 0.25,
//     marca:"Iphone",
//     modelo:"XS Max",
//     color:"Gris",
//     resolucion:6.5,
//     estadoEquipo:"Bueno",
//     memoriaRam:4,
//     memoriaInterna:64,
//     stock:true,
// },

//     {id: 2,
//     nombreProducto:"Samsung S22",
//     img:"Samsungs22Negro.png",
//     precioVenta:1000,
//     oferta:false ,
//     descuento:0,
//     marca:"Samsung",
//     modelo:"S22",
//     color:"Blanco",
//     resolucion:6.6,
//     estadoEquipo:"Muy Bueno",
//     memoriaRam:8,
//     memoriaInterna:256,
//     stock:false,
// },
//     {id: 3,
//     nombreProducto:"Tesla Pi",
//     img:"tesla-usado.png",
//     precioVenta:1200,
//     oferta: true,
//     descuento: 0.10,
//     marca:"Tesla",
//     modelo:"Pi",
//     color:"Negro",
//     resolucion:6.5,
//     estadoEquipo:"Excelente",
//     memoriaRam:12,
//     memoriaInterna:2048,
//     stock:true,
// },

// ]
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
        res.render("products") 
    },
}



module.exports = mainController;