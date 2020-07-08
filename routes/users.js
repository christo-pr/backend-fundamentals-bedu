var express = require("express")
var models = require("../db/models")
var router = express.Router()

/* GET users listing. */
router.get("/", function (req, res, next) {
  models.User.findAll()
    .then((users) => {
      console.log("users", users)
      res.json(users)
    })
    .catch((err) => {
      console.log("err", err)
      res.status(400).json({ error: err })
    })
})

module.exports = router
