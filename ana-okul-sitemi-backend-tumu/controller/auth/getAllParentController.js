const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const parentModel = require("../../models/parent");
const getAllParent = asyncHandler(async (req, res) => {
  const parent = await parentModel.find();
  console.log(parent);
  res.status(200).json(parent);
});
module.exports = {
  getAllParent,
};
