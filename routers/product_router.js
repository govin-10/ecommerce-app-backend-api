const express = require("express");
const router = express.Router();
const {
  addNewProduct,
  getProducts,
  getProductById,
  deleteProductById,
} = require("../controllers/productController");

router.route("/").get(getProducts);
router.route("/addproducts").post(addNewProduct);
router.route("/product/:id").get(getProductById);
router.route("/product/delete/:id").delete(deleteProductById);
//router.get("/:id", getProductById);

module.exports = router;
