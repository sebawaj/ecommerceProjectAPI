const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
var { expressjwt: jwt } = require("express-jwt");

const isAdmin = require("../Middleware/isAdmin");

router.get("/", categoryController.index);
router.get(
  "/crear",
  jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  categoryController.create,
);
router.post(
  "/",
  jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  categoryController.store,
);
router.get("/:id", categoryController.show);
router.get(
  "/:id/editar",
  jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  categoryController.edit,
);
router.patch(
  "/:id",
  jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  categoryController.update,
);
router.delete(
  "/:id",
  jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  categoryController.destroy,
);

module.exports = router;
