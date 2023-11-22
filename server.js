const express = require('express');
const routes = require("./routes/apiRoutes");
const homeRoutes=require("./routes/homeRoutes");

const sequelize = require('./config/connection');
const path = require('path');
const cors = require("cors");
const { engine } = require("express-handlebars");
//const exphbs =require("express-handlebars")


const app = express();
const PORT = process.env.PORT || 3001;

const hbs=exphbs.create();

app.engine("handlebars",hbs.engine)
app.use("view engine","handlebars")

app.set("view engine", "handlebars");
app.use(cors());

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes); 
app.use(homeRoutes);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));


app.engine("handlebars", engine({
layoutsDir: path.join(__dirname, "views", "Layout"),
defaultLayout: "main",
}));

app.get("/", (req, res) => {
  res.render("main", { layout: "dashboard" });
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});

