const mongoose = require("mongoose");
require("dotenv").config();

const kevdbHOST = process.env.DB_HOST_KEV;
const kevdbUSER = process.env.DB_USER_KEV;
const kevdbPASSWORD = process.env.DB_PASSWORD_KEV;
const kevdbURL = `mongodb+srv://${kevdbUSER}:${kevdbPASSWORD}@${kevdbHOST}`;

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(kevdbURL);
    console.log("CONNECTED TO DB!");
    
  } catch (e) {
    console.error(e);
  }
}

module.exports = main;
