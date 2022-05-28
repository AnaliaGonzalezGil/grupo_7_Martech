const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("public"));


app.listen(3000, () => {
  console.log("Servidor Funcionando");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});
app.get("/carrito", (req, res) => {
    res.sendFile(__dirname + "/views/carrito.html");
});

