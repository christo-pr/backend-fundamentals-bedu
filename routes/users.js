var express = require("express")
var db = require("../db/models")
var router = express.Router()

/* GET users listing. */
router.get("/", function (req, res, next) {
  return db.User.findAll().then((users) => res.json(users))
})

module.exports = router
