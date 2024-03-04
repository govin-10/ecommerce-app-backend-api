const Category = require("../models/category");

const addNewCategory = async (req, res) => {
  const myCategory = new Category({
    name: req.body.name,
    image: req.body.image,
  });
  await myCategory
    .save()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getCategories = async (req, res) => {
  await Category.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { addNewCategory, getCategories };
