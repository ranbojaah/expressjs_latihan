require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const connectDatabase = require("./src/middleware/db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function () {
  console.log(`server ok PORT ${PORT}`);
});

app.use(connectDatabase);

const testRoute = require("./src/router/test");
app.use(testRoute);

const sekulRouter = require("./src/router/sekulRoute");
app.use("/school", sekulRouter);

const kelasRouter = require("./src/router/kelasRoute");
app.use("/kelas", kelasRouter);
