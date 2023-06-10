const User = require("../models/user")

const getToken = (req) => {

    const authHeaders = req.headers.authorization
    const token = authHeaders.split(" ")[1]

    return token
}
module.exports = getToken