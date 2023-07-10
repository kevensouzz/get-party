const router = require("express").Router()

// parties
const partyRouter = require("./party")
router.use("/", partyRouter)

// users
const usersRouter = require("./user")
router.use("/", usersRouter)

module.exports = router