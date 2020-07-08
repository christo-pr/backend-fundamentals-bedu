var express = require("express")
var router = express.Router()
var models = require("../db/models")

/* GET home page. */
router.get("/", function (req, res, next) {
  models.User.findAll().then(function (data) {
    return res.json(data)
  })
})

module.exports = router
