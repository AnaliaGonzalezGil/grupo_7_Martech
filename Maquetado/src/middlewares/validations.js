    

const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
const app = require("../app");
const fs = require("fs");


    

const validations = [
    body("nombre").notEmpty().withMessage("Tienes que escribir un nombre"),
    body("apellido").notEmpty().withMessage("Tienes que escribir un apellido"),
    body("email").isEmail().withMessage("Tienes que escribir un correo válido"),
    body("password").notEmpty().withMessage("Escribe tu contraseña"),


]

module.exports = validations