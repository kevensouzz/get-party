const { Party } = require("../models/party")

function checkPartyBudget(budget, services) {
  const priceSum = services.reduce((sum, service) => sum + service.price, 0)

  if (priceSum > budget) {
    return false
  }

  return true
}

const partyController = {
  create: async (req, res) => {
    try {

      const party = {
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services
      }

      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        res.status(406).json({ error: "orçamento insuficiente!" })
        return
      }

      const response = await Party.create(party)
      res.status(201).json({ response, success: "success!" })

    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {

      const parties = await Party.find()

      parties ? res.status(200).json(parties) : res.status(404).json({ error: "there isn't service!" })

    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {

      const id = req.params.id
      const party = await Party.findById(id)

      party ? res.json(party) : res.status(404).json({ error: "service not found!" })

    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {

      const id = req.params.id
      const party = await Party.findById(id)

      const deletedParty = await Party.findByIdAndDelete(id)

      party ? res.status(200).json({ deletedParty, success: `${deletedParty.title} has been successfully deleted!` }) : res.status(404).json({ error: "service not found!" })

    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {

    const id = req.params.id

    const party = {
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
      budget: req.body.budget,
      image: req.body.image,
      services: req.body.services
    }

    const updatedParty = await Party.findByIdAndUpdate(id, party)

    if (!updatedParty) {
      res.status(404).json({ error: "party not found!" })
    }

    res.status(200).json({ party, success: "party has been succesfully updated!" })
  }
}

module.exports = partyController
