const express = require("express");
require("./config");
const Products = require("./products");
const app = express();

app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Products.deleteOne(req.params);
  res.send(data);
});

app.listen(4500, () => console.log("Server started at port 4500"));
