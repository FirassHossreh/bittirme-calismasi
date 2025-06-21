const express = require("express");
const multer = require("multer");
const path = require("path");
const { parentLogin } = require("../controller/auth/parentLoginController");

const { employeeLogin } = require("../controller/auth/employeeLoginController");
const {
  employeeRegister,
} = require("../controller/auth/employeeRegisterController");
const {
  IsAuthenticated,
  removeToken,
} = require("../controller/UserController");
const router = express.Router();

const uploadPath = path.join(__dirname, "../uploads");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const name = req.body.name?.replace(/\s+/g, "-").toLowerCase() || "noname";
    const surname =
      req.body.surName?.replace(/\s+/g, "-").toLowerCase() || "nosurname";
    const fileExt = file.originalname.split(".").pop();
    const date = new Date();
    const dateString = date.toISOString().split("T")[0];
    console.log(dateString);
    const filename = `${name}-${surname}-profile-${dateString}.${fileExt}`;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });

router
  .route("/employee-register")
  .post(upload.single("photo"), employeeRegister);
router.route("/employee-login").post(employeeLogin);
router.route("/parent-login").post(parentLogin);

router.route("/is-authenticated").get(IsAuthenticated);
router.route("/remove-token").get(removeToken);
module.exports = router;
