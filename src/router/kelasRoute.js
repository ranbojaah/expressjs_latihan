const express = require("express");
const router = express.Router();
const kelasController = require("../controllers/kelasController");

router.route("/").get(kelasController.index).post(kelasController.store);
router
  .route("/:id")
  .patch(kelasController.update)
  .delete(kelasController.destroy);
module.exports = router;
