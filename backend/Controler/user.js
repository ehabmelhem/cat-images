const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://ehab:8QGkM5NPb8Ul2VB7@cluster0.ndi7f.mongodb.net/cat-images",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

const catSecham = new mongoose.Schema({
  name: String,
  age: Number,
  url: String,
});
const firstCollection = mongoose.model("firstCollection", catSecham);

exports.getCatData = (req, res) => {
  const { name, age, url } = req.body;
  var add = new firstCollection({ name: name, age: age, url: url });
  add.save().then(() => {
    console.log("the cat " + name + " has been add to the DB");
  });
  res.send({ messge: "from server", name, age, url });
};
exports.getAllCats = (req, res) => {
  firstCollection.find({}).then((docs) => {
    res.send({ docs });
  });
};
// mongodb+srv://ehab:8QGkM5NPb8Ul2VB7@cluster0.ndi7f.mongodb.net

// WAu7DPssybLpEAjP
