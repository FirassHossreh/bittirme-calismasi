const express = require("express");
const router = express.Router();

const { getParentData } = require("../controller/auth/getParentData");
const {
  createChildRegisterationApplication,
  getChildRegisterationApplication,
} = require("../controller/child-registration-application-controller");

router.route("/get-parent-data").get(getParentData);

router
  .route("/create-child-registration-application")
  .post(createChildRegisterationApplication);
router
  .route("/get-one-child-registration-application")
  .get(getChildRegisterationApplication);
module.exports = router;
