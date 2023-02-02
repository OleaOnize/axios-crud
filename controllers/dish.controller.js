const menuService = require("../services/menuService")

module.exports.list = (req, res, next) => {
    menuService.getDishes()
    .then(response => {
        console.log(response)
        res.render('dishes/dishes', { dishes: response.data }) //PREGUNTAR ESTO
      })
      .catch(err => next(err))
  }

  module.exports.doDelete = (req, res, next) => {
    menuService.deleteDish(req.params.id)
    .then((response) => {
        res.redirect('/dishes')
      })
      .catch(err => next(err))
    }
  
  module.exports.create =(req, res, next) => {
    res.render("dishes/create")
  }

  module.exports.doCreate = (req, res,next) => {
    menuService.createDish(req.body)
    .then(response => {
      res.redirect('/dishes')
    })
    .catch(err=> next(err))
  }

  module.exports.edit = (req, res, next) => {
    menuService.getDish(req.params.id)
    .then(response => {
      res.render("dishes/edit", {dishes: response.data})
    })
    .catch(err=> next(err))
  }

  module.exports.doEdit = (req, res, next) => {
    menuService.editDish(req.params.id, req.body)
    .then(response => {
      res.redirect("/dishes")
    })
    .catch(err=> next(err))
  }
