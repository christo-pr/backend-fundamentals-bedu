var passport = require("passport")
var passportJWT = require("passport-jwt")

var models = require("./db/models")
var LocalStrategy = require("passport-local").Strategy
var JWTStrategy = passportJWT.Strategy
var ExtractJWT = passportJWT.ExtractJwt

//  Login using local strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, cb) {
      return models.User.findOne({
        where: { email, password },
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

// Middleware to protect routes
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    function (jwtPayload, cb) {
      return models.User.findByPk(jwtPayload.id)
        .then((user) => {
          return cb(null, user)
        })
        .catch((err) => {
          return cb(err)
        })
    }
  )
)
