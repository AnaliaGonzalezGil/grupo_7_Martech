const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs")
const usersFilePath = path.join(__dirname, "../database/users.json");
const usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const { validationResult } = require("express-validator");

const nombrefile={
fileName: "./database/users.json",
    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName,"utf-8"));
    }, //trae todo el Json para despues leerlo y ver si existe usuario-clave o cualquier campo que querramos//
    findAll: function() {
        return this.getData(); //trae todo getData//
    },
    findByPk: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound; //trae toda la info encontrada si coincide ID puesto con ID del Json//
    },
    findByField: function(field,text) {
        let allUsers = this.findAll();
        let userFound =allUsers.find(oneUser => oneUser[field] === text);
        return userFound; //compara el valor puesto en texto (como puede ser mail para logearse contra el campo email encontrado en el json//
    },
}
const controller = {
    register: (req,res) => {
        return res.render("/login");
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
            password: bcryptjs.hashSync(req.body.password,10),
            // password2: bcryptjs.hashSync(req.body.password2,10),
            imagendePerfil:req.body.imagendePerfil};
            user.id = usuarios.length + 1;
            user.imagendePerfil = user.id + "imagendePerfil";
            
        let usuarioenBD = nombrefile.findByField("email",req.body.email)
        if (usuarioenBD){
            return res.render("register", {
                errors: {
                    email: {
                        msg: "este email ya está registrado"
                    }
                },
                oldData: req.body
            })
        }
        usuarios.push(user)
            fs.writeFileSync(usersFilePath, JSON.stringify(usuarios), "utf-8");
            res.redirect("/")

        },
    login: function (req, res) {
    return res.render("login");
    
},
    profile: (req,res) => {
    return res.render("perfil")
},
    // fileName: "./database/users.json",
    // getData: function(){
    //     return JSON.parse(fs.readFileSync(this.fileName,"utf-8"));
    // }, //trae todo el Json para despues leerlo y ver si existe usuario-clave o cualquier campo que querramos//
    // findAll: function() {
    //     return this.getData(); //trae todo getData//
    // },
    // findByPk: function(id) {
    //     let allUsers = this.findAll();
    //     let userFound = allUsers.find(oneUser => oneUser.id === id);
    //     return userFound; //trae toda la info encontrada si coincide ID puesto con ID del Json//
    // },
    // findByField: function(field,text) {
    //     let allUsers = this.findAll();
    //     let userFound =allUsers.find(oneUser => oneUser[field] === text);
    //     return userFound; //compara el valor puesto en texto (como puede ser mail para logearse contra el campo email encontrado en el json//
    // },
};

// console.log(nombreArchivo.findByField("email","baucott0@parallels.com"))

module.exports = controller;
