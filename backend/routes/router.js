const router = require("express").Router();

router.get("/", (req, res) => {
  const links = { Parties: "/Parties", Users: "/users" };
  res.json(links);
});

// parties
const partyRouter = require("./party");
router.use("/", partyRouter);

// users
const usersRouter = require("./user");
router.use("/", usersRouter);

module.exports = router;
