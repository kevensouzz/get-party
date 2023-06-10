const mongoose = require("mongoose");
require("dotenv").config();

// const dbHOST = process.env.DB_HOST;
// const dbUSER = process.env.DB_USER;
// const dbPASSWORD = process.env.DB_PASSWORD;

// const dbURL = `mongodb+srv://${dbUSER}:${dbPASSWORD}@api-rest.dkqy8oh.mongodb.net/mern-app?retryWrites=true&w=majority`;
// const dbURL = `mongodb+srv://kevensouzz:KEVENSS2006@api-rest.dkqy8oh.mongodb.net/`;

async function main() {
    try {

        mongoose.set('strictQuery', true)
        await mongoose.connect('mongodb+srv://leonardomarcelosantana:kygCllDSBPDQdlOi@restApi-project.z4rlwsk.mongodb.net/dbrest?retryWrites=true&w=majority')
        console.log('conectou')
    } catch (e) {
        console.error(e)
    }
}

module.exports = main