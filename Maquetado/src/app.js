/* Requires*/
const express = require("express");
const createError = require("http-errors");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mainRouter = require("./routes/mainRouter");
const products = require("./routes/products");

/** apps -use */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));
app.use(methodOverride("_method"));

/**Template Engine */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(3000, () => {
  console.log("Servidor Funcionando");
});
app.use("/", mainRouter);
app.use("/products", products);

module.exports = app;
