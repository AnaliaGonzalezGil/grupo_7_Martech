const express = require("express");
const app = express();
const path = require("path");
const mainRouter = require("./routes/mainRouter");

app.use(express.static(path.join(__dirname,"../public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));
app.listen(3000, () => {
  console.log("Servidor Funcionando");
});
app.use("/", mainRouter);
