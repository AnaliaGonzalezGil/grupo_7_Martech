const path = require("path");
const bcryptjs = require("bcryptjs")
const { validationResult, check } = require("express-validator");
const { errors } = require("express-validator");
const db = require("../database/models");
const { Op } = require("sequelize");
const moment = require('moment')
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;
const express = require("express");
const { body } = require("express-validator");
const app = require("../app");
const fs = require("fs");
const Usuarios = db.User

const nombreFile = {
    //  getData: function(){
    //     return this.fileName
    // }, //trae todo el Json para despues leerlo y ver si existe usuario-clave o cualquier campo que querramos//
    findAll: function() {
        return Usuarios.findAll(); //trae todo getData//
    },
    findByPk: function(email) {
        let allUsers = Usuarios.findAll();
        Promise
        .all([todosUsuarios])
        .then(([allUsers]) =>{
        let userFound = allUsers.find(oneUser => oneUser.email === email);
        return userFound; //trae toda la info encontrada si coincide ID puesto con ID del Json//
    })},
    findByField: function(field,text) {
        const todosUsuarios = db.User.findAll({raw:true});
         return Promise
         .all([todosUsuarios])
         .then(([allUsuarios]) =>{
                const userFound = allUsuarios.find(oneUser => oneUser[field] === text);
                return userFound; //compara el valor puesto en texto (como puede ser mail para logearse contra el campo email encontrado en la base//
            }).catch( err => {
                throw new Error(err)
            })
        }
}

    module.exports = nombreFile;
