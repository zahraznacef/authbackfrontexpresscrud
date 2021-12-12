const router = require("express").Router();

const occasion = require("./Controller");


router.post("/occasion/addoccasion",occasion.addoccasion);

router.get("/occasion/getalloccasions",occasion.getalloccasions);

router.delete("/occasion/deleteoccasion/:id",occasion.deleteoccasion);

router.put("/occasion/updateoccasion/:id",occasion.updateoccasion);

router.get("/occasion/getoneoccasion/:id",occasion.getoneoccasion);

module.exports = router;