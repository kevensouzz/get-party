const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

// db connection
const conn = require("./db/conn")

// routes
const routes = require("./routes/router")
app.use("/api", routes)

conn()
    .then(() => {
        app.listen(5000);

    })
    .catch((err) => console.log(err));