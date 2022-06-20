const  mainController={
    index: function(req,res){ 
        res.render("index",) 
    },
    carrito: function(req,res){ 
        res.render("carrito") 
    },
    detalle: function(req,res){ 
        res.render("detalle") 
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
}


module.exports = mainController;