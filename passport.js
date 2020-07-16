var passport = require('passport')
var passportJWT = require('passport-jwt')
var passportLocal = require('passport-local')
var models = require('./db/models')

var localStrategy = passportLocal.Strategy

var JWTStrategy = passportJWT.Strategy

var ExtractJWT = passportJWT.ExtractJwt

passport.use(
    new localStrategy(
        {
        usernameField: 'email',
        passwordField: 'password',
        },
        function(email,password,cb){
            return models.User.findOne({where: {email,password}})
            .then(function(user){
                return cb(null,user)

            }).catch(function(error){
                return cb(error)
            })
        }
    )
)

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