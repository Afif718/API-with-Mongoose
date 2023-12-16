const express = require("express");
require("./config");
const Products = require("./products");

const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new Products(req.body);
  let result = await data.save();
  console.log(result);
  res.send(result);
});

app.listen(4500, () => console.log("Server started at port 4500"));
