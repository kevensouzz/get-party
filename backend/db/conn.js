const mongoose = require("mongoose");
require("dotenv").config();

const kevdbHOST = process.env.DB_HOST_KEV;
const kevdbUSER = process.env.DB_USER_KEV;
const kevdbPASSWORD = process.env.DB_PASSWORD_KEV;
const kevdbURL = `mongodb+srv://${kevdbUSER}:${kevdbPASSWORD}@${kevdbHOST}`;

// const leodbHOST = process.env.DB_HOST_LEO;
// const leodbUSER = process.env.DB_USER_LEO;
// const leodbPASSWORD = process.env.DB_PASSWORD_LEO;
// const leodbURL = `mongodb+srv://${leodbUSER}:${leodbPASSWORD}@${leodbHOST}/mern-app?retryWrites=true&w=majority`;

async function main() {
  try {
    mongoose.set("strictQuery", true);

    // await mongoose.connect(leodbURL)

    await mongoose.connect(kevdbURL);
    console.log("CONNECTED TO DB!");
  } catch (e) {
    console.error(e);
  }
}

module.exports = main;
