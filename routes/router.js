const router = require("express").Router();

const partyRouter = require("./party");
router.use("/", partyRouter);

module.exports = router;
