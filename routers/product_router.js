const express = require("express");
const router = express.Router();
const {
  addNewProduct,
  getProducts,
  getProductById,
  deleteProductById,
  updateProductById,
} = require("../controllers/productController");
const upload = require("../utils/multerConfig");

router.route("/").get(getProducts);
router.route("/addproducts").post(upload.single("image"), addNewProduct);
router.route("/product/:id").get(getProductById);
router.route("/product/delete/:id").delete(deleteProductById);
router.route("/update/:id").patch(updateProductById);
//router.get("/:id", getProductById);

module.exports = router;

// router.route("/register").post(
//   upload.fields([
//     {
//       name: "avatar", //Yo frontend ma pani avatar naam batai import garinchha..
//       maxCount: 1,
//     }]),
//   registerUser
// );
