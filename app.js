var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
require("dotenv").config()

// Auth
require("./passport")

// Routes
var listingsRouter = require("./src/routes/listings")
var authRouter = require("./src/routes/auth")

var app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/listings", listingsRouter)
app.use("/auth", authRouter)

module.exports = app
