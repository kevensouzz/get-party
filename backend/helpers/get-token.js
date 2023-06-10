const User = require("../models/user")


const getToken = async(req) => {
    const authorization = req.headers.authorization
    const token = authorization.split(" ")[1]


    return token
}

module.exports = getToken