require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const con = require("./src/config/connection");
app.use(function (req, res, next) {
  req.con = con;
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function () {
  console.log(`server ok PORT ${PORT}`);
});

const testRoute = require("./src/router/test");
app.use(testRoute);

const sekulRouter = require("./src/router/sekulRoute");
app.use("/school", sekulRouter);

const kelasRouter = require("./src/router/kelasRoute");
app.use("/kelas", kelasRouter);
