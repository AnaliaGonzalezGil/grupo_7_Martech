const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs")
const usersFilePath = path.join(__dirname, "../database/users.json");
const usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const { validationResult, check } = require("express-validator");
const nombrefile = require("../middlewares/nombreFile.js");
const { errors } = require("express-validator");


const controller = {
    check: (req,res) => {
        return res.render("check", {usuarios:usuarios})
    },
    register: (req,res) => {
        return res.render("register");
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
    let errors = validationResult(req);
    if (errors.isEmpty()){
        let usersJSON = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"), {errors:errors});
        let users;
        if (usersJSON =="") {
        users =[];
        }else {
        users= usersJSON;
        }}else{
            return res.render("login", {errors: errors.errors})
        }
        for( let i=0; i< usuarios.length; i++) {
                        if(usuarios[i].email == req.body.email){
                            if (bcryptjs.compareSync(req.body.password, usuarios[i].password)){
                            usuarioALoguearse= usuarios[i];
                            req.session.userLogged= usuarioALoguearse;
                            if(req.body.recordarUsuario) {
                                res.cookie('recordame', req.body.email, {maxAge: 60000})
                                return res.redirect('/');
                                }
                                console.log(req.session.userLogged);
                                console.log("recordame");
                                
        }}}},

    
    // let userLogged = nombreFile.findByField("email",req.body.email);
    // let usuarioALoguearse2;
    // if (userLogged){
    //     let passwordOK = bcryptjs.compareSync(req.body.password, userLogged.password);
    //     if (passwordOK) {  
    //         for( let i=0; i< usuarios.length; i++) {
    //             if(usuarios[i].email == req.body.email){
    //                 if (bcryptjs.compareSync(req.body.password, usuarios[i].password)){
    //                 usuarioALoguearse= usuarios[i];
    //                 req.session.userLogged= usuarioALoguearse;
    //                 if(req.body.recordarUsuario != undefined) {
    //                     res.cookie('recordame', usuarioALoguearse.email, {maxAge: 6000000})
    //                     }
    //             }
    //             }
    //         }
    //         console.log(usuarioALoguearse)
    //         return res.redirect("/");
    //     }
    // }else{

    // return res.render("login",{ 
    //     errors: {
    //         email: {
    //             msg: "Credenciales Inválidas"
                
    //         }}
    //     },
    //     )}}

    profile: (req,res) => {
    return res.render("index")
}

}

module.exports = controller;
