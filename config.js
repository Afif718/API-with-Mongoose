const mongoose = require("mongoose");

//now connect with database
mongoose
  .connect("mongodb://localhost:27017/e-comm")
  .then(() => console.log("Connected!!"));
