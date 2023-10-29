const express = require("express");
const router = express.Router();

const userController = require("../controllers/tes");

router.route("/test").get(userController.index).post(userController.store);

router.put("/test/:id", userController.update);

router.delete("/test/:userId", userController.delete);

module.exports = router;
