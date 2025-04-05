const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const i18n = require("./configs/i18n-config");
const dataBaseConnection = require("./configs/dataBaseConnection");
const languageMW = require("./middlewares/languageMW");
/* import routes */
const User = require("./routes/UserRouter");

/* import routes */
const app = express();
dotenv.config();
dataBaseConnection();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
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
app.use("/api/v1/kindergarten/auth", User);
PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`the server listening of ${PORT} port`);
});
