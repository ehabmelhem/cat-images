const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./Routers/user");
var cookieParser = require("cookie-parser");
const app = express();
app.use(body_parser.json());
app.use(cookieParser());
app.use(express.static("../app/build"));
app.use("/users", router);

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
// mongodb+srv://ehab:AqzAdO31TJoDPZ5K@cluster0.ndi7f.mongodb.net/test
// AqzAdO31TJoDPZ5K
