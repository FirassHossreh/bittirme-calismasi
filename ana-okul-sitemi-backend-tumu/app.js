const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const dataBaseConnection = require("./configs/dataBaseConnection");
/* import routes */
const User = require("./routes/UserRouter");

/* import routes */
const app = express();
dotenv.config();
dataBaseConnection();

app.use(cors());
if (process.env.ENVIRONMENT) {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use("/api/v1/kindergarten", User);

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`the server listening of ${PORT} port`);
});
