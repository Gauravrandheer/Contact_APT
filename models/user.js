const mongoose = require("mongoose");
const useSchema = new mongoose.Schema({
  name: String,
  panid: String,
  number: Number,
});

const User = mongoose.model("User", useSchema);

module.exports = User;
