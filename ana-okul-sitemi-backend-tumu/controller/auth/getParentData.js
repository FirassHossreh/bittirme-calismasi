const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const parentModel = require("../../models/parent");
const getParentData = asyncHandler(async (req, res) => {
  const result = jwt.verify(req.decryptedToken, process.env.SECRET_KEY);
  const parent = await parentModel.findOne({ _id: result.id });
  res.status(200).json(parent);
});
module.exports = {
  getParentData,
};
