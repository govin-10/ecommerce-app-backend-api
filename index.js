require("dotenv").config();
const PORT_NUMBER = process.env.PORT;
const mongoose = require("mongoose");
const db_url = process.env.CONNECTION_STRING;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

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
