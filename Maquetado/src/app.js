/* Requires*/
const express = require("express");
const createError = require('http-errors');
const app = express();
const path = require("path");
const mainRouter = require("./routes/mainRouter");
const products = require("./routes/products");

const methodOverride =  require('method-override');

/** apps -use */
//app.use(express.urlencoded({ extended: false }));
//app.use(logger('dev'));
app.use(express.json());
//app.use(cookieParser());
app.use(express.static(path.join(__dirname,"../public")));
app.use(methodOverride('_method')); 

/**Template Engine */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));


app.listen(3000, () => {
  console.log("Servidor Funcionando");
});
app.use("/", mainRouter);
app.use("/products", products);


module.exports = app;