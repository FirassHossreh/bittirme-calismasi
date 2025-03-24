const express = require("express");
const { login } = require("../controller/UserController");
const { IsAuthenticated } = require("../controller/UserController");
const router = express.Router();

router.route("/login").post(login);
router.route("/is-authenticated").get(IsAuthenticated);
module.exports = router;
