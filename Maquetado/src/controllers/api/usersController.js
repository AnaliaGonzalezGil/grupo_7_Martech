
const db = require("../../database/models");
const sequelize = db.sequelize;
const usuarios = db.User;



const usersController = {
    profile:  (req, res)=>{
        db.User.findAll()
                .then(users => {
            res.status(200).json({meta:{status:200,
                                        total: users.length,
                                        url:'api/users'},
                                  data: users})
        })

    },
    detalle:(req, res)=>{
        db.User.findByPk(req.params.id)
                .then(users => {
            res.status(200).json({meta:{status:200,
                                        url:'api/users/detalle' + req.params.id},
                                  data: users})
        })

    },


} 


      module.exports = usersController;
