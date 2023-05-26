const { Service } = require("../models/service")

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
      }

      const response = await Service.create(service)

      res.status(201).json({ response, msg: "sucessfully created service!" })
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = serviceController
