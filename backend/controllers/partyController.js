const Party = require("../models/party");

const partyController = {
  create: async (req, res) => {
    try {
      const partyCount = await Party.countDocuments();
      if (partyCount >= 10) {
        return res
          .status(400)
          .json({
            error: "Maximum limit (10) reached. Cannot create more parties.",
          });
      }

      const party = {
        title: req.body.title,
        author: req.body.author,
        budget: req.body.budget,
        image: req.body.image,
      };

      const response = await Party.create(party);
      res.status(201).json(response);
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const parties = await Party.find();

      parties
        ? res.status(200).json(parties)
        : res.status(404).json({ error: "there isn't service!" });
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const party = await Party.findById(id);

      party
        ? res.json(party)
        : res.status(404).json({ error: "service not found!" });
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const party = await Party.findById(id);

      const deletedParty = await Party.findByIdAndDelete(id);

      party
        ? res.status(200).json({
            deletedParty,
            success: `${deletedParty.title} has been successfully deleted!`,
          })
        : res.status(404).json({ error: "service not found!" });
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    const id = req.params.id;

    const party = {
      title: req.body.title,
      author: req.body.author,
      budget: req.body.budget,
      image: req.body.image,
    };

    const updatedParty = await Party.findByIdAndUpdate(id, party);

    if (!updatedParty) {
      res.status(404).json({ error: "party not found!" });
    }

    res
      .status(200)
      .json({ party, success: "party has been succesfully updated!" });
  },
};

module.exports = partyController;
