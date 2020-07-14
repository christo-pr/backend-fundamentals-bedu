var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
const passport = require("passport")
require("dotenv").config()


// Auth
require("./passport")
// Routes
var authRouter = require("./routes/auth")
// Users
var usersRouter = require("./routes/users")
// Listings
var listingsRouter = require("./routes/listings")


var app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))


app.use("/auth", authRouter)
app.use("/users", usersRouter)
app.use("/users", passport.authenticate("jwt", { session: false }), usersRouter)
app.use(
  "/listings",
  passport.authenticate("jwt", { session: false }),
  listingsRouter
)

module.exports = app
