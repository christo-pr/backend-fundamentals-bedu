var express = require("express")
var db = require("../db/models")
var router = express.Router()

/* GET tenants */
router.get("/", function (req, res, next) {
  var filter = req.body.filter || {}
  return db.Tenant.findAll(filter).then((tenants) => res.json(tenants))
})

/* GET tenants */
router.get("/:id", function (req, res, next) {
  return db.Tenant.findByPk(req.param.id).then((tenant) => res.json(tenants))
})

/* POST tenants */
router.post("/", function (req, res, next) {
  db.Tenant.create({ ...req.body })
    .then(function (tenant) {
      res.json({ success: true, data: tenant })
    })
    .catch(function (error) {
      res.status(500).json({ error: error })
    })
})

/* PUT tenants */
router.put("/:id", function (req, res, next) {
  db.Tenant.update({ ...req.body }, { where: { id: req.params.id } })
    .then(function () {
      res.json({ success: true })
    })
    .catch(function (error) {
      res.status(500).json({ error: error })
    })
})

/* DELETE tenants */
router.delete("/:id", function (req, res, next) {
  db.Tenant.destroy({ where: { id: req.params.id } })
    .then(function () {
      res.json({ success: true })
    })
    .catch(function (error) {
      res.status(500).json({ error: error })
    })
})

module.exports = router
