const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("main", { layout: "main" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/login", async (req, res) => {
  try {
  res.render("loginpage", { layout: "main" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signuppage");
  } catch (error) {
    console.log(error);
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

router.get("/user", async (req, res) => {
  try {
    res.render("userpage");
  } catch (error) {
    console.log(error);
  }
});
//should only be available if user is logged in

module.exports = router;
