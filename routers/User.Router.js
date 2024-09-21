const express = require("express");
const userRouter = express.Router();

userRouter.post("/signup", function (req, res) {
  res.json({
    message: "sign up route",
  });
});

userRouter.post("/signin", function (req, res) {
  res.json({
    message: "sign in route",
  });
});

module.exports = userRouter;
