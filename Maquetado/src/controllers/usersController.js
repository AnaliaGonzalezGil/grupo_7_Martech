const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../database/users.json");
const usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));


const controller = {
    register: (req,res) => {
        return res.render("/login");
    },
    // processRegister: (req,res)=> {
    //     return res.render(req.body);
    // },

    store: (req, res) => {
    let user = req.body;
    user.id = usuarios.length + 1;
    user.imagendePerfil = user.id + "imagendePerfil";
    usuarios.push(user);
    fs.writeFileSync(usersFilePath, JSON.stringify(usuarios), "utf-8");
    res.redirect("/login");
    },
    login: function (req, res) {
        return res.render("login");
    },
    profile: (req,res) => {
        return res.render("perfil")
    }
};


module.exports = controller;