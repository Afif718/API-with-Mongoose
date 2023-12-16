const mongoose = require("mongoose");

// Define a Mongoose schema for the product
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

// Create a Mongoose model named "products" based on the defined schema
// The model is a constructor that allows interacting with the MongoDB collection
module.exports = mongoose.model("products", productSchema);
