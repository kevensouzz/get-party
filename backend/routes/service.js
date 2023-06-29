const router = require("express").Router();
const serviceController = require("../controllers/serviceController");
const verifyToken = require("../helpers/verify-token");

router
  .route("/services")
  .post((req, res) => serviceController.create(req, res));

router.get("/services", serviceController.getAll);

router
  .route("/services")
  .get((req, res) => serviceController.getAll(req, res));

router
  .route("/services/:id")
  .get((req, res) => serviceController.get(req, res));

router
  .route("/services/:id")
  .delete((req, res) => serviceController.delete(req, res));

router
  .route("/services/:id")
  .put((req, res) => serviceController.update(req, res));

// router
//   .route("/services")
//   .post(verifyToken, (req, res) => serviceController.create(req, res));

// router
//   .get("/services", verifyToken, serviceController.getAll);

// router
//     .route("/services")
//     .get((req, res) => verifyToken, serviceController.getAll(req, res))

// router
//   .route("/services/:id")
//   .get(verifyToken, (req, res) => serviceController.get(req, res));

// router
//   .route("/services/:id")
//   .delete(verifyToken, (req, res) => serviceController.delete(req, res));

// router
//   .route("/services/:id")
//   .put(verifyToken, (req, res) => serviceController.update(req, res));

module.exports = router;
