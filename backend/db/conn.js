const mongoose = require("mongoose")

async function main() {
  try {
    mongoose.set("strictQuery", true)

    await mongoose.connect(
      "mongodb+srv://kevensouzz:KEVENSS2006@api-rest.dkqy8oh.mongodb.net/?retryWrites=true&w=majority"
    )

    console.log("sucessfully connected to db!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = main