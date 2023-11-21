const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("homepage")
})

router.get("/login", (req, res) => {
    res.render("loginpage")
})

router.get("/signup", (req, res) => {
    res.render("signuppage")
})

router.get("/about", (req, res) => {
    res.render("aboutpage")
})

router.get("/contact", (req, res) => {
    res.render("contactpage")
})

router.get("/user", (req, res) => {
    res.render("userpage")
})


module.exports = router;