const express = require("express");
const { customerContact } = require("../controller/cutomerContact");
const router = express.Router();

router.post("/customer-contact", customerContact);
module.exports = router;
