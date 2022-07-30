
const express = require("express");
const { body } = require("express-validator");
const app = require("../app");

const nombrefile = {
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
    }}

    module.exports = nombrefile;