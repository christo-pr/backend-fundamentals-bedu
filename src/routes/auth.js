var express = require("express")
var jwt = require("jsonwebtoken")
var passport = require("passport")

var router = express.Router()

/* POST /login */
router.post("/login", function (req, res) {
  passport.authenticate("local", { session: false }, function (
    error,
    user,
    info
  ) {
    if (error || !user) {
      return res.status(400).json({
        message: info ? info.message : "Login failed",
        user: user,
      })
    }

    req.login(user, { session: false }, function (error) {
      if (error) res.send(error)

      // Generate the token
      var token = jwt.sign(user, process.env.JWT_SECRET)
      return res.json({ user, token })
    })
  })(req, res)
})

module.exports = router
