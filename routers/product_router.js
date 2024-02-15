const express = require("express");
const router = express.Router();
const {
  addNewProduct,
  getProducts,
} = require("../controllers/productController");

router.route("/").get(getProducts);
router.route("/addproducts").post(addNewProduct);

module.exports = router;
