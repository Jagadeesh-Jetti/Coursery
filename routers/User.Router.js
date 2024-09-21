const express = require("express");
const userRouter = express.Router();

app.post("/signup", function (req, res) {
  res.json({
    message: "sign up route",
  });
});

app.post("?signin", function (req, res) {
  res.json({
    message: "sign in route",
  });
});

module.exports = userRouter;
