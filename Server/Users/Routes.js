const router = require("express").Router();

const user = require("./Controller");


router.post("/user/adduser",user.adduser);

router.get("/user/getallusers",user.getallusers);

router.delete("/user/deleteuser/:id",user.deleteuser);

router.put("/user/updateuser/:id",user.updateuser);

router.get("/user/getoneuser/:id",user.getoneuser);

module.exports = router;