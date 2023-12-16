const express = require("express");
require("./config");
const Products = require("./products");
const app = express();

app.get("/list", async (req, res) => {
  let data = await Products.find({});
  res.send(data);
});

app.listen(4500, () => {
  console.log("Server running at port 4500");
});
