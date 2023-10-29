const express = require("express");
const router = express.Router();

const sekulController = require("../controllers/sekulController");

router
  .route("/")
  .get(sekulController.index)
  .post(sekulController.store)
  .put(sekulController.update)
  .delete(sekulController.destroy);

router.get("/find", sekulController.find);

module.exports = router;
