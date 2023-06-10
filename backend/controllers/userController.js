const User = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const createUserToken = require('../helpers/create-user-token')
const getUserByToken = require('../helpers/get-user-by-token')
const getToken = require('../helpers/get-token')
module.exports = class userController {

    static async register(req, res) {
        try {
            const { name, email, password, comfirmPass } = req.body

            if (!name || !email || !password) {
                res.status(422).json({ 'message': 'Campos obrigatórios não preenchidos!' })
                return
            }
            if (password != comfirmPass) {
                res.status(422).json({ 'message': 'Senha e confirmação de senha devem ser iguais!' })
                return
            }

            const users = await User.findOne({ email: email })

            if (users) {
                return res
                    .status(422)
                    .json({ message: 'há usuário cadastrado com este e-mail!' })
            }

            const salt = await bcrypt.genSalt(12)
            const passwordHash = await bcrypt.hash(password, salt)

            const user = new User({
                name: name,
                email: email,
                password: passwordHash,
            })
            const response = await User.create(user)
            await createUserToken(req, res, response)

            // res.status(201).json({ response, success: "success!" })

        } catch (error) {
            res.status(500).json({ message: error })
        }
    }
    static async login(req, res) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.status(422).json({ 'message': 'Campos obrigatórios não preenchidos!' })
                return
            }

            const userExist = User.findOne({ email: email })
            if (!userExist) {

                return res
                    .status(422)
                    .json({ message: 'Não há usuário cadastrado com este e-mail!' })

            }
            const checkPass = bcrypt.compare(password, userExist.password)
            if (!checkPass) {
                return res.status(422).json({ message: 'Senha inválida' })
            }

            await createUserToken(req, res, userExist)

        } catch (error) {
            res.status(500).json({ message: error })
        }
    }
    static async getUserById(req, res) {
        const id = req.params.id

        const user = await User.findById(id)

        if (!user) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        res.status(200).json({ user })
    }
    static async getAll(req, res) {

        const users = await User.find();
        try {
            res.status(200).json({ users: users });
            return;
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    static async editUser(req, res) {
        const token = getToken(req)
        const user = await getUserByToken(token)

        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const confirmpassword = req.body.confirmpassword


        // validations
        if (!name) {
            res.status(422).json({ message: 'O nome é obrigatório!' })
            return
        }

        user.name = name

        if (!email) {
            res.status(422).json({ message: 'O e-mail é obrigatório!' })
            return
        }

        // check if user exists
        const userExists = await User.findOne({ email: email })

        if (user.email !== email && userExists) {
            res.status(422).json({ message: 'Por favor, utilize outro e-mail!' })
            return
        }

        user.email = email

        // check if password match
        if (password != confirmpassword) {
            res.status(422).json({ error: 'As senhas não conferem.' })

            // change password
        } else if (password == confirmpassword && password != null) {
            // creating password
            const salt = await bcrypt.genSalt(12)
            const reqPassword = req.body.password

            const passwordHash = await bcrypt.hash(reqPassword, salt)

            user.password = passwordHash
        }

        try {
            // returns updated data
            const updatedUser = await User.findOneAndUpdate({ _id: user._id }, { $set: user }, { new: true }, )
            res.json({
                message: 'Usuário atualizado com sucesso!',
                data: updatedUser,
            })
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }
}