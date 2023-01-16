const User = require("../modules/userModule");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const signUp = async (req, res) => {
  if (!req.body.username || !req.body.password || !req.body.email) {
    res.send({ message: "Please enter the data needed" });
  } else {
    var user = await User.findOne({ username: req.body.username });
    if (user) {
      res.send({ message: "You have already an account" });
    } else {
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (hash) {
          var newUser = new User({
            username: req.body.username,
            password: hash,
            email: req.body.email,
          });
          await newUser.save();
          res.send({ message: "User created and saved" });
        } else {
          // console.log(err);
          res.send({ message: err });
        }
      });
    }
  }
}

const login = async (req, res) => {
  var user = await User.findOne({ username: req.body.username });
  if (user) {
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (result) {
        var token = jwt.sign({ id: user._id }, process.env.TOKEN);
        res.send({ token });
      } else {
        res.send({ message: "Wrong password" });
      }
    });
  } else {
    res.send({ message: "Wrong username" }
    )};
};

const verifying = async (req,res) => {
jwt.verify(req.body.token, process.env.TOKEN, async (err, payload) => {
if(payload) {
  var user = await User.findOne({_id: payload.id});
  res.send(user);
} else {
  res.send({message: "session expired"})
}
})
};

const getUsers = async (req, res) => {
    let users = await User.find({})
    res.send(users)
}

module.exports = { signUp, login, verifying, getUsers};