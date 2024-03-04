const Product = require("../models/products");

//GetAllProducts
const getProducts = async (req, res) => {
  // await Product.find()
  //   .then((result) => {
  //     res.send(result);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });

  try {
    const products = await Product.find();
    res.status(200).json({
      data: products,
      TotalProducts: products.length,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error while fetching the products",
    });
  }
};

const addNewProduct = async (req, res) => {
  // const myProduct = new Product({
  //   name: req.body.name,
  //   price: req.body.price,
  //   category: req.body.category,
  // });
  // await myProduct
  //   .save()
  //   .then((result) => {
  //     console.log(result);
  //     res.json(result);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });

  const { name, price, category } = req.body;

  if (!name || !price || !category) {
    res.status(400).json({
      message: "Please provide all the fields!!",
    });
  }

  const addedProd = await Product.create({
    name,
    price,
    category,
  });

  res.status(200).json({
    message: "Product added successfully!!",
    data: addedProd,
  });
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      message: "Product fetched successfully!!",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      message: "Product not found!!",
    });
  }
};

const deleteProductById = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error while deleting!!",
    });
  }
};

// const updateProductById = async (req, res) => {
//   try {
//     const product = await findById(req.params.id);
//     const updatedProduct = await product.updateOne(
//       { id: product.id },
//       { $set: req.body }
//     );
//     res.status(200).json({
//       message: "Product details updated successfully",
//       data: updatedProduct,
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: "Product update failed!!",
//     });
//   }
// };

module.exports = {
  addNewProduct,
  getProducts,
  getProductById,
  deleteProductById,
};
