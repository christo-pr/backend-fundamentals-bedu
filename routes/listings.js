var express = require("express")
var db = require("../db/models")
var router = express.Router()

/* GET users listing. */
router.get("/", function (req, res, next) {
  var filter = req.body.filter || {}
  return db.Listing.findAll(filter).then((listings) => res.json(listings))
})

/* GET users listing. */
router.get("/:id", function (req, res, next) {
  var listingId = req.params.id
  return db.Listing.findByPk(listingId).then((listing) => res.json(listing))
})

/* POST users listing. */
router.post("/", function (req, res, next) {
  db.Listing.create({ ...req.body, userId: req.user.id })
    .then(function (listing) {
      res.json({ success: true, data: listing })
    })
    .catch(function (error) {
      res.status(500).json({ error: error })
    })
})

/* PUT users listing. */
router.put("/:id", function (req, res, next) {
  var listingId = req.params.id
  var { name, description, address, price, maxAllow, payDate } = req.body

  var updatedListing = {
    id: listingId,
    name,
    description,
    address,
    price,
    maxAllow,
    payDate,
  }

  db.Listing.update(updatedListing, { where: { id: listingId } })
    .then(function (listing) {
      res.json({ success: true, data: updatedListing })
    })
    .catch(function (error) {
      res.status(500).json({ error: error })
    })
})

/* DELETE users listing. */
router.delete("/:id", function (req, res, next) {
  var listingId = req.params.id

  db.Listing.destroy({ where: { id: listingId } })
    .then(function () {
      res.json({ success: true })
    })
    .catch(function (error) {
      res.status(500).json({ error: error })
    })
})

module.exports = router
