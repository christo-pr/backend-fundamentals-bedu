var passport = require("passport")
var models = require("./db/models")
var LocalStrategy = require("passport-local").Strategy

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, cb) {
      return models.User.find({
        where: models.Sequelize.and({ email, password }),
      })
        .then(function (user) {
          return cb(null, user)
        })
        .catch((err) => {
          return cb(err)
        })
    }
  )
)
