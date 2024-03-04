const express = require("express");

const app = express();

//regular middlewares

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" })); //This will make us able to get data from the url.

//Route imports
const productRoute = require("./routers/product_router");
const categoryRoutes = require("./routers/category_router");

app.use("/api", productRoute);
app.use("/categoryapi", categoryRoutes);

module.exports = app;
