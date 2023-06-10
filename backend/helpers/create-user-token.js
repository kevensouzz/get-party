const jwt = require("jsonwebtoken");

const createUserToken = async(req, res, user) => {
    const token = jwt.sign(
        // payload data
        {
            name: user.name,
            id: user._id,
        },
        "nossosecret"
    );

    // return token
    res.status(200).json({
        message: "Você está autenticado!",
        token: token,
    });
};

module.exports = createUserToken;