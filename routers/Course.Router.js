const express = require("express");
const CourseRouter = express.Router();

CourseRouter.get("/courses", function (req, res) {
  res.json({
    message: "courses",
  });
});

CourseRouter.post("/purchase", function (req, res) {
  res.json({
    message: "purchase route",
  });
});

module.exports = CourseRouter;
