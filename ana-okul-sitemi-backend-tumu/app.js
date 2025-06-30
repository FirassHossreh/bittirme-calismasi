const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const i18n = require("./configs/i18n-config");
const dataBaseConnection = require("./configs/dataBaseConnection");
const languageMW = require("./middlewares/languageMW");
const { checkTokenExists } = require("./middlewares/check-token-exists");
const { tokenDecode } = require("./middlewares/token-decode");

/* import routes */
const JobPostRoute = require("./routes/jobPostRoute");
const AuthRoute = require("./routes/authRoute");
const CutomerContactRoute = require("./routes/customerContactRoute");
const authorizationRoute = require("./routes/protectedRoute");
/* import routes */
const app = express();
dotenv.config();
dataBaseConnection();
const allowedOrigins = [process.env.FRONTEND_URL, process.env.FRONTEND_URL_2];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
if (process.env.ENVIRONMENT) {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(cookieParser());
app.use(i18n.init);
app.use(languageMW);
app.use("/api/v1/kindergarten/auth", AuthRoute);
app.use(
  "/api/v1/kindergarten/authorization",
  checkTokenExists,
  tokenDecode,
  authorizationRoute
);
app.use("/api/v1/kindergarten", JobPostRoute);
app.use("/api/v1/kindergarten", CutomerContactRoute);
PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`the server listening of ${PORT} port`);
});
