const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = require("./app");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database connection successful!!");
  } catch (error) {
    console.log(`Error during connection of database ${error}.`);
    process.exit(1);
  }
};

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server started from port ${process.env.PORT}`);
});
