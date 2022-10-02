const db = require("../../database/models");
const sequelize = db.sequelize;
const productos = db.Product;

const productsControllerApi = {
    todos: (req,res) => {
        db.Product.findAll()
                .then(products => {
                    return res.status(200).json({meta:{status:200,
                                        count: products.length,
                                        url:'/api/products'},
                                    data: {products: products.map(function(products){
                                    return products.id  + "," + products.nombreProducto + ","+ products.descripcion + "," +  '/api/products/detalle/' + products.id
                                                                                    })
                                        }}
                                                )
        })
    }
}

module.exports = productsControllerApi;