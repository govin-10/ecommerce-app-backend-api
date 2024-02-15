require("dotenv").config();

//from the .env file
const PORT_NUMBER = process.env.PORT;
const db_url = process.env.CONNECTION_STRING;

//importing the required modules
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

//importing the routes
const productRoutes = require("./routers/product_router");

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//initial route
app.get("/", (req, res) => {
  res.send("Hello World");
});

//routes
app.use("/products", productRoutes);

//database connection and server initialization
app.listen(PORT_NUMBER, async () => {
  await mongoose
    .connect(db_url)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  console.log(`Server is running on port ${PORT_NUMBER}`);
});
