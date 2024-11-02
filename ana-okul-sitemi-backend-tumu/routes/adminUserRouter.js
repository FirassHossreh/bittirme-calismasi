const express = require("express");
const { login } = require("../controller/adminUserController");
const router = express.Router();

router.route("/admin/login").post(login);

module.exports = router;
