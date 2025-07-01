const express = require("express");
const router = express.Router();
const { getAllParent } = require("../controller/auth/getAllParentController");
const {
  getAllChildRegisterationApplication,
  updateChildRegisterationApplication,
} = require("../controller/child-registration-application-controller");

router.route("/get-all-parent").get(getAllParent);
router.route("/get-all-applications").get(getAllChildRegisterationApplication);
router
  .route("/edit-application/:id")
  .patch(updateChildRegisterationApplication);
module.exports = router;
