const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//SOLVE CORS
app.use(cors({ credentials: true, origin: "http://localhost:5000/api" }));

// db connection
const conn = require("./db/conn");

// routes
const routes = require("./routes/router");
app.use("/api", routes);

conn()
  .then(() => {
    app.listen(5000);
    console.log("SERVER IS RUNNING!");
  })
  .catch((err) => console.log(err));
