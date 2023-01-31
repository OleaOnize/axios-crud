const router = require("express").Router()
const dishController = require("../controllers/dish.controller")

router.get("/", (req, res, next) => res.render("home"))

// Dishes

router.get("/dishes", dishController.list)
router.post("/dishes/:id/delete", dishController.doDelete)









module.exports = router;