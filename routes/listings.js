var express = require("express")
var db = require("../db/models")
var router = express.Router()

/* GET users listing. */
router.get("/", function (req, res, next) {
  return db.Listing.findAll().then((listings) => res.json(listings))
})

module.exports = router
