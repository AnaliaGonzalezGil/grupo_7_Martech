const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs")
const usersFilePath = path.join(__dirname, "../database/users.json");
const usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const { validationResult } = require("express-validator");
const nombrefile = require("../middlewares/nombreFile.js");
const nombreFile = require("../middlewares/nombreFile.js");
const salt = bcryptjs.genSalt(11);

const controller = {
    register: (req,res) => {
        return res.render("/register");
    },

    store: function(req,res,next){
        console.log(req); // en el video para este metodo usan el find all minuto 20 aprox//
       const resultValidation = validationResult(req);
       if (resultValidation.errors.length > 0) {
       return res.render("register", {
        errors: resultValidation.mapped(),old: req.body
        });
        }

        let user = {
            nombre: req.body.nombre,
            apellido:req.body.apellido,
            email:req.body.email,
            password: bcryptjs.hashSync(req.body.password,salt),
            imagendePerfil:req.body.imagendePerfil};
            user.id = usuarios.length + 1;
            user.imagendePerfil = user.id + "imagendePerfil";
            
        let usuarioenBD = nombrefile.findByField("email",req.body.email)
        if (usuarioenBD){
            return res.render("register", {
                errors: {
                    email: {
                        msg: "Este email ya está registrado",
                        
                    }   
                },old: req.body
                
            })
        }
        usuarios.push(user)
            fs.writeFileSync(usersFilePath, JSON.stringify(usuarios), "utf-8");
            res.redirect("/")

        },
    login: (req, res) => {
    return res.render("index");

},
procesoLogin: (req, res) => {
    let userToLogin = nombreFile.findByField("email",req.body.email);

    if (userToLogin){
        let passwordOK = bcryptjs.compareSync(req.body.contraseña, userToLogin.password);
        if (passwordOK) {            
            return res.redirect("/");
        }
    }
    return res.render("login",{
        errors: {
            email: {
                msg: "Credenciales Inválidas"
                
            }
        },
    })
},
    profile: (req,res) => {
    return res.render("index")
},

};

module.exports = controller;
