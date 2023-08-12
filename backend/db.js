const mongoose = require("mongoose");
require("dotenv").config();

const dbHOST = process.env.DB_HOST;
const dbUSER = process.env.DB_USER;
const dbPASSWORD = process.env.DB_PASSWORD;
const dbURL = `mongodb+srv://${dbUSER}:${dbPASSWORD}@${dbHOST}`;

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(dbURL);
    console.log("DATABASE IS ON!");
    
  } catch (e) {
    console.error(e);
  }
}

module.exports = main;
