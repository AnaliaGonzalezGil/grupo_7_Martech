const db = require("../../database/models");
const sequelize = db.sequelize;
const usuarios = db.User;



const usersController = {
    profile:  (req, res)=>{
        db.User.findAll()
                .then(users => {
            res.status(200).json({meta:{status:200,
                                        total: users.length,
                                        url:'/api/users',},

                                  data: {users: users.map(function(users){
                                    return users.id  + "," + users.firstName + "," + users.lastName + "," + users.email  + "," + '/api/users/detalle/' + users.id
                                 
                                  }
                                    )
                                      },})
        })

    },
    detalle:(req, res)=>{
        db.User.findByPk(req.params.id, 
          {
          attributes: {
            exclude: ['contrasenia', 'esAdmin']
                      }
          })
              .then(users => {   
                  res.status(200).json({meta:{status:200,
                                         url:'/api/users/detalle' + req.params.id},
                                       //users: users.imagenPerfil = '/images/users/' + users.imagenPerfil,
                                        data:users.imagenPerfil = '/images/users/' + users.imagenPerfil,
                                        data: users,
                                      })
                             });
                          }
                              
        

                            } ;


      module.exports = usersController;