const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const homeRoutes = require("./routes/homeRoutes");
const sequelize = require("./config/connection");
const path = require("path");
const cors = require("cors");
const { engine } = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars engine with custom configurations
app.engine(
  "handlebars",
  engine({
    layoutsDir: path.join(__dirname, "views/layouts"),
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

// Enable CORS
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Parse JSON and url-encoded query
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use API routes with a base path
app.use("/api", apiRoutes);

// Use Home routes
app.use("/", homeRoutes);

// Sync sequelize models and then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});
