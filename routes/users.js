var express = require("express")
var db = require("../db/models")
var router = express.Router()

/* GET users listing. */
router.get("/", function (req, res, next) {
  var filter = req.body.filter || {}
  return db.User.findAll(filter).then((users) => res.json(users))
})

module.exports = router
