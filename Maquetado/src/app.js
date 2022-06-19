const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Servidor Funcionando");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});
app.get("/Detalle", (req, res) => {
  res.sendFile(__dirname + "/views/Detalle_de_producto.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/carrito", (req, res) => {
  res.sendFile(__dirname + "/views/carrito.html");
});