const db = require("../../database/models");
const sequelize = db.sequelize;
const productos = db.Product;
const marca = db.marca;
const colores= db.color;
// const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

const productsController = {
    todos: (req,res) => {
        db.Product.findAll()
                .then(products => {
                    return res.status(200).json({meta:{status:200,
                                        count: products.length,
                                        url:'/api/products'},
                                    // countByCategory: {countByCategory: products.map(function(products){
                                    //     return marca.length;
                                    //                                                     })
                                    //         },
                    //                 countByCategory2: {countByCategory: products.id_marca.map((products) => products.reduce((a, v) => {  
                    //                     (v === marca ? a + 1 : a), 0})
                                      
                    // )},
                    // countByCategory3: {countByCategory: products.filter(products.nombreProducto)},

                                    data: {products: products.map(function(products){
                                    return products.id  + "," + products.nombreProducto + ","+ products.descripcion + "," +  '/api/products/detalle/' + products.id
                                                                                    })
                                        }}
                                                )
        })
    },
    detalle:(req, res)=>{
        db.Product.findByPk(req.params.id, 
          )
              .then(products => {   
                  res.status(200).json({meta:{status:200,
                                         url:'/api/products/detalle' + req.params.id},
                                        data: products.imgIndex = '/images/products/' + products.imgIndex,
                                        data: products,
                                        relacion: {marca: products.id_marca,
                                                color: products.id_color,
                                                opsys:products.id_os}
                                      })
                             });
                          }
}

module.exports = productsController;

