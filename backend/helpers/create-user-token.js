const jwt = require('jsonwebtoken')


const createUserToken = async(req, res, user) => {

    const token = jwt.sign({

        'name': user.name,
        'id': user._id
    }, 'nossosecret')

    res.status(200).json({
        'message': 'User authenticate sucess!',
        'token': token,
        'userId': user._id
    })
}
module.exports = createUserToken;