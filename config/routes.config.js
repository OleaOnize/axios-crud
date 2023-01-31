const router = require("express").Router()
const dishController = require("../controllers/dish.controller")

router.get("/", (req, res, next) => res.render("home"))

// Dishes

router.get("/dishes", dishController.list)









module.exports = router;