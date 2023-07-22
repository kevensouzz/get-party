const User = require("../models/user");
const bcrypt = require("bcrypt");
const createUserToken = require("../helpers/create-user-token");
const getUserByToken = require("../helpers/get-user-by-token");
const getToken = require("../helpers/get-token");
module.exports = class userController {
  static async register(req, res) {
    try {
      const { name, email, password, comfirmPass } = req.body;

      if (!name || !email || !password) {
        res.status(422).json({ error: "there are required fields no filled in!" });
        return;
      }
      if (password != comfirmPass) {
        res
          .status(422)
          .json({ error: "password confirmation must be same as password!" });
        return;
      }

      const users = await User.findOne({ email: email });

      if (users) {
        return res
          .status(422)
          .json({
            error: "there is already a has user registred with this email!",
          });
      }

      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      const user = new User({
        name: name,
        email: email,
        password: passwordHash,
      });
      const response = await User.create(user);
      await createUserToken(req, res, response);

      // res.status(201).json({ response, success" })
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res
          .status(422)
          .json({ error: "there are required fields not filled in!" });
        return;
      }

      const userExist = await User.findOne({ email: email });
      if (!userExist) {
        return res
          .status(422)
          .json({ error: "there is no user registered with this email!" });
      }
      const checkPass = bcrypt.compare(password, userExist.password);
      if (!checkPass) {
        return res.status(422).json({ error: "invalid password" });
      }

      await createUserToken(req, res, userExist);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getUserById(req, res) {
    const id = req.params.id;

    const user = await User.findById(id);

    if (!user) {
      res.status(422).json({ error: "user not found!" });
      return;
    }

    res.status(200).json(user);
  }
  static async getAll(req, res) {
    const users = await User.find();
    try {
      res.status(200).json(users);
      return;
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async editUser(req, res) {
    const token = getToken(req);
    const user = await getUserByToken(token);

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;

    // validations
    if (!name) {
      res.status(422).json({ error: "the name is required!" });
      return;
    }

    user.name = name;

    if (!email) {
      res.status(422).json({ error: "the e-mail is required!" });
      return;
    }

    // check if user exists
    const userExists = await User.findOne({ email: email });

    if (user.email !== email && userExists) {
      res.status(422).json({ error: "please use another email!" });
      return;
    }

    user.email = email;

    // check if password match
    if (password != confirmpassword) {
      res.status(422).json({ error: "passwords don't match!" });

      // change password
    } else if (password == confirmpassword && password != null) {
      // creating password
      const salt = await bcrypt.genSalt(12);
      const reqPassword = req.body.password;

      const passwordHash = await bcrypt.hash(reqPassword, salt);

      user.password = passwordHash;
    }

    try {
      // returns updated data
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $set: user },
        { new: true }
      );
      res.json({
        success: "user has been updated!",
        data: updatedUser,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;
      const user = await User.findById(id);

      const userDeleted = await User.findByIdAndDelete(id);

      user
        ? res.status(200).json({
            userDeleted,
            success: `${userDeleted.name} has been successfully deleted!`,
          })
        : res.status(404).json({ error: "user not found!" });
    } catch (error) {
      console.log(error);
    }
  }
};
