const Spots = require("../models/Spots");
const Users = require("../models/Users");

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;

    const user = await Users.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const spot = await Spots.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(",").map(tech => tech.trim()),
      price
    });

    return res.json(spot);
  }
};
