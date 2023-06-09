const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
  const dbHOST = process.env.DB_HOST;
  const dbUSER = process.env.DB_USER;
  const dbPASSWORD = process.env.DB_PASSWORD;

  const dbURL = `mongodb+srv://${dbUSER}:${dbPASSWORD}@${dbHOST}/?retryWrites=true&w=majority`;

  try {
    mongoose.set("strictQuery", true);

    await mongoose
      .connect(dbURL)
      .then(() => {
        console.log("sucessfully connected to db!");
      });
  } catch (error) {
    console.log(error);
  }
}

module.exports = main;
