const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// solve cors
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// db connection
const conn = require("./conn");

// routes
const routes = require("./routes/router");
app.use("/", routes);

conn()
  .then(() => {
    app.listen(5000);
    console.log("SERVER IS ON!");
  })
  .catch((err) => console.log(err));
