const express = require("express");
const router = express.Router();
const {
  getJobPosts,
  createJobPost,
  getJobPost,
} = require("../controller/jobPostController");
router.route("/get-job-posts").get(getJobPosts);
router.route("/create-job-post").post(createJobPost);
router.route("/get-job-post/:id").get(getJobPost);
module.exports = router;
