const express = require("express");
require("./config");
const Products = require("./products");
const app = express();
app.use(express.json());

app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Products.updateOne(req.params, {
    $set: req.body,
  });
  res.send(data);
});

app.listen(4500, () => console.log("Server started at port 4500"));
