const con = require("../config/connection");

const connectDatabase = function (req, res, next) {
  req.con = con;
  next();
};

module.exports = connectDatabase;
