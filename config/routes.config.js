const router = require("express").Router()
const dishController = require("../controllers/dish.controller")

router.get("/", (req, res, next) => res.render("home"))

// Dishes

router.get("/dishes", dishController.list)
router.post("/dishes/:id/delete", dishController.doDelete)
router.get("/dishes/create", dishController.create)
router.post("/dishes/create", dishController.doCreate)
router.get("/dishes/:id/edit", dishController.edit)
router.post("/dishes/:id", dishController.doEdit)  //IMPORTANTE :id









module.exports = router;