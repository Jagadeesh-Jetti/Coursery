const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const courseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  courseName: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
