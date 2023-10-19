const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
var { expressjwt: jwt } = require("express-jwt");

const isAdmin = require("../Middleware/isAdmin");

router.get("/", reviewController.index);
router.post(
  "/",
  jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  reviewController.store,
);
router.get("/:id", reviewController.show);
router.patch(
  "/:id",
  jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  reviewController.update,
);
router.delete(
  "/:id",
  jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  reviewController.destroy,
);

module.exports = router;
