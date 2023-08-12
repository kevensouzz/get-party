const express = require("express");
const cors = require("cors");
const app = express();
const partyController = require("./controllers/partyController");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const db = require("./db");

app.post("/", (req, res) => partyController.create(req, res));
app.get("/", (req, res) => partyController.getAll(req, res));
app.get("/:id", (req, res) => partyController.get(req, res));
app.delete("/:id", (req, res) => partyController.delete(req, res));
app.put("/:id", (req, res) => partyController.update(req, res));

db()
  .then(() => {
    app.listen(5000);
    console.log("SERVER IS ON!");
  })
  .catch((err) => console.log(err));
