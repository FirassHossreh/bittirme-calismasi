const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const dataBaseConnection = require("./configs/dataBaseConnection");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
/* import routes */
const User = require("./routes/UserRouter");

/* import routes */
const app = express();
dotenv.config();
dataBaseConnection();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

if (process.env.ENVIRONMENT) {
  app.use(morgan("dev"));
}
app.use("/api/v1/kindergarten/auth", User);
PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`the server listening of ${PORT} port`);
});
