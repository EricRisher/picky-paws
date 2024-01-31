const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Owner = require("../models/Owner.js");
const withAuth = require("../utils/auth");


router.get("/", async (req, res) => {
  try {
    res.render("main", { layout: "main" });
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    Owner.findOne({
      where: {
        email: req.body.email,
      },
    }).then((userData) => {
      if (!userData) {
        res.status(400).json({ message: "No owner with that username!" });
        return;
      }
      const validPassword = userData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: "Incorrect password!" });
        return;
      }
      req.session.save(() => {
        req.session.owner_id = userData.owner_id;
        req.session.loggedIn = true;
        res.redirect("/homepage");
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect to the dashboard
  if (req.session.loggedIn) {
    res.redirect("/homepage");
    return;
  }
  res.render("loginpage");
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signuppage", { layout: "main" });
        req.session.owner_id = owner.owner_id;
  } catch (error) {
    console.log(error);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new owner
    const newOwner = await Owner.create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: hashedPassword,
    });

    // Redirect or respond as needed
    res.render("userpage", { layout: "main" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error during signup");
  }
});

router.get("/about", async (req, res) => {
  try {
    res.render("aboutpage");
  } catch (error) {
    console.log(error);
  }
});

router.get("/contact", async (req, res) => {
  try {
    res.render("contactpage");
  } catch (error) {
    console.log(error);
  }
});

router.get("/homepage", async (req, res) => { 
  if (!req.session.loggedIn) {
    // Handle the case where there is no session or owner_id is not set
    return res.status(401).send("Please log in to view this page");
  }

  try {
    const owner = await Owner.findByPk(req.session.owner_id);
    res.render("userpage", {loggedIn: true, owner: owner.dataValues});
  } catch (error) {
    console.error(error);
    res.status(500).send("Error loading homepage");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error logging out");
    }
    res.redirect("/login");
  });
});

module.exports = router;
