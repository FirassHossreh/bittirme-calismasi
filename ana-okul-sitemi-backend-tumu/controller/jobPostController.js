const asyncHandler = require("express-async-handler");
const jobPost = require("../models/jobPost");
const { jobPostValidation } = require("../utils/validations/jobPostValidation");
const getJobPosts = asyncHandler(async (req, res) => {
  const jobPosts = await jobPost.find();
  res.status(200).json(jobPosts);
});
const createJobPost = asyncHandler(async (req, res) => {
  const { error } = jobPostValidation(req.body);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }
  const newJobPost = await jobPost.create(req.body);
  res.status(201).json({ msg: "İş ilanı oluşturuldu", newJobPost });
});
const getJobPost = asyncHandler(async (req, res) => {
  const singleJobPost = await jobPost.findById(req.params.id);
  if (!singleJobPost) {
    return res.status(404).json({ msg: "İş ilanı bulunamadı" });
  }
  res.status(200).json(singleJobPost);
});
module.exports = { getJobPosts, createJobPost, getJobPost };
