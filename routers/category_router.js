const express = require("express");
const router = express.Router();

const {
  addNewCategory,
  getCategories,
} = require("../controllers/categoryController");

router.route("/").get(getCategories);
router.route("/addcategory").post(addNewCategory);

module.exports = router;
