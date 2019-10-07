const { model, Schema } = require("mongoose");

const UserSchema = Schema({
  email: String
});

module.exports = model("User", UserSchema);
