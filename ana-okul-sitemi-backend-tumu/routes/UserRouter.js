const express = require("express");
const { login, removeToken } = require("../controller/UserController");
const { IsAuthenticated } = require("../controller/UserController");
const router = express.Router();

router.route("/login").post(login);
router.route("/is-authenticated").get(IsAuthenticated);
router.route("/remove-token").get(removeToken);
module.exports = router;
