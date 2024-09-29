const express = require("express");
const products = require("./data");
const app = express();

// create first routes
app.get("/", (req, res) => {
  return res.json({ message: "Basmah" });
});

app.get("/api/products", (req, res) => {
  return res.status(200).json({ data: data });
});
app.listen(8000, () => {
  console.log("Server started on port 8000");
});
