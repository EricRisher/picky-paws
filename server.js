const express = require('express');
const routes = require("./routes/apiRoutes");
const homeRoutes = require("./routes/homeRoutes")

const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require("express-handlebars")

const app = express();
const PORT = process.env.PORT || 3001;


const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes); 
app.use(homeRoutes)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

