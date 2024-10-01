const express = require("express");
const UserRouter = express.Router();

UserRouter.post("/signup", function (req, res) {
  res.json({
    message: "sign up route",
  });
});

UserRouter.post("/signin", function (req, res) {
  res.json({
    message: "sign in route",
  });
});

module.exports = UserRouter;
