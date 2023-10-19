const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
var { expressjwt: jwt } = require("express-jwt");

const isAdmin = require("../Middleware/isAdmin");

router.get("/", orderController.index);
router.get("/crear", orderController.create);
router.post("/", orderController.store);
router.get("/:id", orderController.show);
router.get(
  "/:id/editar",
  jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  orderController.edit,
);
router.patch(
  "/:id",
  jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  orderController.update,
);
router.delete(
  "/:id",
  jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  orderController.destroy,
);

module.exports = router;
