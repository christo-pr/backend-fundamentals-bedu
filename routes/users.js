var express = require("express")
var models = require("../db/models")
var router = express.Router()

/* GET users listing. */
router.get("/", async function (req, res, next) {
  var users = await models.User.findAll()
  console.log("users", users)
  res.json(users)
})

module.exports = router
