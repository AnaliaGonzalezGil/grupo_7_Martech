const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs")
const { validationResult} = require("express-validator");
const nombrefile = require("../middlewares/nombreFile.js");
const { errors } = require("express-validator");
const db = require("../database/models");
const { Op } = require("sequelize");
const moment = require('moment')
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;
const usuarios = db.User;

const controller = {

     // check: (req,res) => {
    //     return res.render("check", {usuarios:usuarios})
    // },
    // register: (req,res) => {
    //     return res.render("register");
    // },

    agregarUsuario: (req, res)=>{
        db.User.findByPk(req.params.id,)
                .then(User => {
            res.render("register.ejs", {users})
        })

        let todosUsuarios = usuarios.findAll();
    
        Promise
        .all([todosUsuarios])
        .then(([allusuarios]) =>{
          return res.render("register",{allusuarios} )})
        .catch(error => res.send(error));
      },
    
    store: function(req,res){
        //console.log(req); // en el video para este metodo usan el find all minuto 20 aprox//
       const resultValidation = validationResult(req);
       if (resultValidation.errors.length > 0) {
       return res.render("register", {
        errors: resultValidation.mapped(),old: req.body
        });
        }

        let user = {
            firstName: req.body.nombre,
            lastName:req.body.apellido,
            email:req.body.email,
            contrasenia: bcryptjs.hashSync(req.body.password,10),
            imagenPerfil: !!req.file ? req.file.filename : null
        };
        
            
        // let usuarioenBD =  nombrefile.findByField("email",req.body.email)

        nombrefile.findByField("email",req.body.email)
            .then( usuarioenBD => {
                if (usuarioenBD){
                    return res.render("register", {
                        errors: {
                            email: {
                                msg: "Este email ya está registrado",
                                
                            }   
                        },
                        old: req.body
                        
                    })
                } else {
                    return usuarios.create(user);
                }
            })
            .then( (created) => {
                if(!!created){
                    res.redirect('/');
                }
            })
            .catch( error => {
                res.send(error)
            })

        // console.log('desde el controlador!!',usuarioenBD)

        // if (usuarioenBD){
        //     return res.render("index", {
        //         errors: {
        //             email: {
        //                 msg: "Este email ya está registrado",
                        
        //             }   
        //         },
        //         old: req.body
                
        //     })
        // }
    },

    login: (req, res)=>{
        db.User.findByField("email",req.body.email)
                .then(User => {
            res.render("login.ejs", {User})
        })

        let todosUsuarios = usuarios.findAll();
    
        Promise
        .all([todosUsuarios])
        .then(([allusuarios]) =>{
          return res.render("login",{allusuarios} )})
        .catch(error => res.send(error));
      },
    

    procesoLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()){
       
            nombrefile.findByField("email",req.body.email)
            .then( usuarioenBD => {
                if (usuarioenBD){
                    return res.render("index", {
                        errors: {
                            email: {
                                msg: "Este email no está registrado",
                                
                            }   
                        },
                        old: req.body
                        
                    })
                }// else {
                    // return true;
                //}
            })
            .then( (created) => {
                if(!!created){
                    res.redirect('/');
                }
            })
            .catch( error => {
                res.send(error)
            })
// --------------------------------------------------------
//          let userDB = (usuarios, {errors:errors});
//             if (userDB =="") {
//                 then.catch(error => res.send(error))
//             }}else{
//                 return res.render("index", {errors: errors.errors})
//             }
//             for( let i=0; i< users.length; i++) {
//                             if(users[i].email == req.body.email){
//                                 if (bcryptjs.compareSync(req.body.password, users[i].password)){
//                                 usuarioALoguearse= users[i];
//                                 req.session.userLogged= usuarioALoguearse;
//                                 if(req.body.recordarUsuario) {
//                                     res.cookie('recordame', req.body.email, {maxAge: 60000})
//                                     return res.redirect('/');
//                                     }
//                                     console.log(req.session.userLogged);
//                                     console.log("recordame");
                                    
//             }}}},
    
   let userLogged = nombrefile.findByField("email",req.body.email);
    let usuarioALoguearse2;
    if (userLogged){
        let passwordOK = bcryptjs.compareSync(req.body.password, userLogged.contrasenia);
        if (passwordOK) {  
            // for( let i=0; i< usuarios.length; i++) {
            //     if(usuarios[i].email == req.body.email){
            //         if (bcryptjs.compareSync(req.body.password, usuarios[i].password)){
            //         usuarioALoguearse= usuarios[i];
            //         req.session.userLogged= usuarioALoguearse;
            //         if(req.body.recordarUsuario != undefined) {
            //             res.cookie('recordame', usuarioALoguearse.email, {maxAge: 6000000})
            //             }
            //     }
            //     }
            // }
            console.log(usuarioALoguearse2)
            return res.redirect("/");
        }
    }else{

    return res.render("login",{ 
        errors: {
            email: {
                msg: "Credenciales Inválidas"
                
            }}
        },
        )}
// }}}
    
 

//     profile: (req,res) => {
//     return res.render("index")
// }

}}}

module.exports = controller;
