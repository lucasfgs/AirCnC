const { model, Schema } = require("mongoose");

const SportSchema = Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = model("Spot", SportSchema);
