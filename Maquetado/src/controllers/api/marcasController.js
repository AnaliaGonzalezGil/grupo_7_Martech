const db = require("../../database/models");
const sequelize = db.sequelize;
const marcas = db.marca;
const usuarios = db.User;

const marcasController = {
    profile:  (req, res)=>{
        db.User.findAll()
                .then(users => {
            res.status(200).json({meta:{status:200,
                                        total: users.length,
                                        url:'/api/marcas',
                                        },

                                  data: {users: users.map(function(users){
                                    return users.id  + "," + users.firstName + "," + users.lastName + "," + users.email  + "," + '/api/marcas/detalle/' + users.id
                                 
                                  }
                                    )
                                      },})
        })

    },
    
                              
        

                            } ;



      module.exports = marcasController;

