const Product = require("../models/products");

const addNewProduct = async (req, res) => {
  const myProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
  });
  await myProduct
    .save()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getProducts = async (req, res) => {
  await Product.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { addNewProduct, getProducts };
