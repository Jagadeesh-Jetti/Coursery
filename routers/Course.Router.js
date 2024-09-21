const express = require("express");
const CourseRouter = express.Router();

app.get("/courses", function (req, res) {
  res.json({
    message: "courses",
  });
});

app.post("/purchase", function (req, res) {
  res.json({
    message: "purchase route",
  });
});

module.exports = CourseRouter;
