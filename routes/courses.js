const express = require("express");
const { getCourses, getCourse, addCourse } = require("../controllers/courses");

const router = express.Router({ mergeParams: true });

router.route("/").get(getCourses).post(addCourse);
router.route("/:id").get(getCourse);

// router.route('bootcamps/:bootcampId/courses').get(getCourses)

module.exports = router;
