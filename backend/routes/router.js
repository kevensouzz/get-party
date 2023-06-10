const router = require("express").Router()

//services
const serviceRouter = require("./service")
router.use("/", serviceRouter)

// parties
const partyRouter = require("./party")
router.use("/", partyRouter)

const usersRouter = require("./user")
router.use("/", usersRouter)

module.exports = router