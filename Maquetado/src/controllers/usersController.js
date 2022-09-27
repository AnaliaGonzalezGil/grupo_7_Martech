const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs")
const { validationResult } = require("express-validator");
const nombrefile = require("../middlewares/nombreFile.js");
const { errors } = require("express-validator");
const db = require("../database/models");
const { Op } = require("sequelize");
const moment = require('moment');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;
const usuarios = db.User;

const app = require("../app.js");
const { findByField } = require("../middlewares/nombreFile.js");

const controller = {
    profile:  (req, res)=>{
        db.User.findAll()
                .then(users => {
            res.render("usuarios.ejs", {users:users})
        })

        let todosUsuarios = usuarios.findAll(); 
    
        Promise
        .all([todosUsuarios])
        .then(([allusuarios]) =>{
        return res.render("register",{allusuarios} )})
        .catch(error => res.send(error));
      },

    agregarUsuario: (req, res)=>{
        db.User.findByPk(req.params.id,)
                .then(users => {
            res.render("register.ejs", {users:users})
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
        },
    login: (req, res)=>{
            db.User.findAll()
                    .then(users => {
                res.render("login.ejs", {users:users})
            })
    
            let todosUsuarios = usuarios.findAll();
        
            Promise
            .all([todosUsuarios])
            .then(([allusuarios]) =>{
              return res.render("login",{allusuarios} )})
            .catch(error => res.send(error));
          },
        
    logearse: async (req,res)=>{
              try {
                let userToLogin =  await nombrefile.findByField("email",req.body.email);
                console.log(userToLogin)
                  if (userToLogin){
                  let passwordOK = bcryptjs.compareSync(req.body.password, userToLogin.contrasenia);
                  if (passwordOK) {            
                      return res.redirect("/");
                  }
              }
   
                              return res.render("login",{ 
                              errors: {
                                  email: {
                                      msg: "Credenciales Inválidas"
                                      
                                  }}
                              },
                              )
              } catch (error) {
                console.log(error)
              }  
          
                        }
                    }
                        
       


module.exports = controller;
