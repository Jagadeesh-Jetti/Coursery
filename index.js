const express = require("express");
const { UserRouter } = require("./routers/User.Router");
const { CourseRouter } = require("./routers/Course.Router");

const app = express();
const PORT = 3000;

app.use("/user", UserRouter);
app.use("/course", CourseRouter);

app.listen(PORT, () => {
  console.log("Course selling course");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
