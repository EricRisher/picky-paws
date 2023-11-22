const router = require ("express").Router();

router.get("/", (re,res)=>{
    res.render("homepage")
})

router.get("/login",()=>{
    res.render("loginpage")
})

router.get("/signup",()=>{
    res.render("signuppage")
})

router.get("/about",()=>{
    res.render("aboutpage")
})

router.get("/contact",()=>{
    res.render("contactpage")
})

router.get("/user",()=>{
    res.render("userpage")
}) 
//should only be available if user is logged in

module.exports = router;