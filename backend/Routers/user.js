const express = require("express");
const router = express.Router();
const userConroler = require("../Controler/user");
router.get("/get-all-cats", userConroler.getAllCats);
router.post("/get-cat-data", userConroler.getCatData);
module.exports = router;
