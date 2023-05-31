require('dotenv').config();
const mongoose = require("mongoose");
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;


const uri = `mongodb+srv://${username}:${password}@cluster0.n39tivs.mongodb.net/`;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("Error connecting to MongoDB Atlas:", error));
