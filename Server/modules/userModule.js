const mongoose = require("../modules/connnection");

const userSchema = new mongoose.Schema({
username: String,
password: String,
email: String
});

const User = mongoose.model("User", userSchema);

module.exports= User;