const db = require("../../database/models");
const sequelize = db.sequelize;
const productos = db.Product;
const marca = db.Marca;
const colores= db.color;
// const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

const productsController = {
    todos: async (req,res) => {

        try {

            const consultaMarcas = await marca.findAll({include: 'products'});
            const consultaProductos = await productos.findAll({include: 'Marca'});
                
            const countByCategory = {};

            consultaMarcas.forEach(element => {
                countByCategory[element.nombre] = element.products.length
            });

            res.send({
                countByCategory,
                products: consultaProductos
            })
            
        } catch (error) {
            console.log(error);
            res.send(error)
        }
        // db.Product.findAll()
        //         .then(products => {
                    // return res.status(200).json({meta:{status:200,
                    //                     count: products.length,
                    //                     url:'/api/products'},

                    //                 data: {products: products.map(function(products){
                    //                 return products.id  + "," + products.nombreProducto + ","+ products.descripcion + "," +  '/api/products/detalle/' + products.id
                    //                                                                 })
                    //                     }}
                    //                             )
        // })
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