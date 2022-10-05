const db = require("../../database/models");
const sequelize = db.sequelize;
const marcas = db.Marca;



const marcasController = {
    todos:  (req, res)=>{

        try{
            const consultaMarcas = marcas.findAll({raw: true, nest: true});
            db.Marca.findAll()
                .then(marcas => {
            res.status(200).json({meta:{status:200,
                                        total: marcas.length,
                                        
                                        url:'/api/marcas',
                                        },
                                        data: {nombre: marcas.map(function(marcas){
                                            return  marcas.nombre
                                         
                                          }
                                            )
                                              },

                                  }
                                  )
        })

    }   
     catch (error) {
    console.log(error);
    res.send(error)
}
        

                            } };



      module.exports = marcasController;