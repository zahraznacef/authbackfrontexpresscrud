const router = require("express").Router();

const users = require("./Controller");



router.post("/user/register",users.register)

router.post("/user/signin",users.signin)



module.exports = router;