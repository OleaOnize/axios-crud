const menuService = require("../services/menuService")

module.exports.list = (req, res, next) => {
    menuService.getDishes()
    .then(response => {
        console.log(response)
        res.render('dishes/dishes', { dishes: response.data })
      })
      .catch(err => next(err))
  }
