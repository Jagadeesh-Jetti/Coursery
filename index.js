const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Course selling course");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
