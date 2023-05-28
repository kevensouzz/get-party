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

      res.status(201).json({ response, success: "sucessfully created service!" })

    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {

      const services = await Service.find()

      services ? res.status(200).json(services) : res.status(404).json({ error: "there isn't service!" })

    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {

      const id = req.params.id
      const service = await Service.findById(id)

      service ? res.json(service) : res.status(404).json({ error: "service not found!" })

    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {

      const id = req.params.id
      const service = await Service.findById(id)

      const serviceDeleted = await Service.findByIdAndDelete(id)

      service ? res.status(200).json({ serviceDeleted, success: `${serviceDeleted.name} has been successfully deleted!` }) : res.status(404).json({ error: "service not found!" })

    } catch (error) {
      console.log(Error);
    }
  },

  update: async (req, res) => {
    const id = req.params.id

    const service = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image
    }

    const updateService = await Service.findByIdAndUpdate(id, service)

    if (!updateService) {
      res.status(404).json({ error: "service not found!" })
    }

    res.status(200).json({ service, success: "service has been succesfully updated!" })
  }
}

module.exports = serviceController
