/* Requires*/
const express = require("express");
const regex = require("regex");
const createError = require("http-errors");
const cookieParser = require("cookie-parser")
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mainRouter = require("./routes/mainRouter");
const products = require("./routes/products");
const users = require("./routes/users");
const session = require("express-session")
const recordarUsuario = require("./middlewares/recordarUsuario");
const guestMiddleware = require("./middlewares/guestMiddleware")
const { cookie } = require("express-validator");
const { parse } = require("path");
const userlogged = require("./middlewares/userLoggedMiddleware");
const apiUsersRoutes = require("./routes/api/usersApiRouter");
const apiProductsRoutes = require("./routes/api/productsApiRouter");
const apiMarcaRoutes = require("./routes/api/marcaApiRouter")

const cors = require("cors");


/** apps -use */
// app.use(recordarUsuario);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../public")));
app.use(methodOverride("_method"));
app.use(session( {secret: "Mensaje Secreto"}));


/**Template Engine */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors())
app.listen(3000, () => {
  console.log("Servidor Funcionando");});

app.use("/", mainRouter);
app.use("/products", products);
app.use("/", users);

app.use("/api", apiUsersRoutes,apiProductsRoutes,apiMarcaRoutes)



const db = require("./database/models");
db.sequelize.sync().then((req) => {
    console.log(req.models);
});
module.exports = app;
