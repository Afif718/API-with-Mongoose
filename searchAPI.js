const express = require("express");
require("./config");
const Products = require("./products");
const app = express();
app.use(express.json());

app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  let data = await Products.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});

app.listen(4500, () => console.log("Server started at port 4500"));
