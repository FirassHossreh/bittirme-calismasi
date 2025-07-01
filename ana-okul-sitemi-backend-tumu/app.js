const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
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
const { ioCookieParser } = require("./middlewares/io-cookie-parser");
const getAllParent = require("./routes/parentRoute");
/* import routes */
const app = express();
const server = http.createServer(app);

dotenv.config();
dataBaseConnection();
const allowedOrigins = [process.env.FRONTEND_URL, process.env.FRONTEND_URL_2];
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST"],
  },
});
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

// Socket.IO bölümü (server.js içindeki ilgili kısım)
io.use(ioCookieParser(io)); // Token doğrulama middleware

io.on("connection", (socket) => {
  console.log("User connected:", socket.id, "UserId:", socket.userId);

  // Kullanıcı kendi userId odasına katılıyor
  socket.join(socket.userId);
  console.log(`${socket.userId} odasına katıldı`);

  // Kullanıcıya kendi ID'sini gönder
  socket.emit("connectedUser", socket.userId);

  socket.on("sendMessage", (data) => {
    console.log("Mesaj alındı:", data);
    // data: { senderId, receiverId, message }

    // Mesajı hem gönderene hem alıcıya gönder (eğer farklılarsa)
    if (data.senderId !== data.receiverId) {
      io.to(data.receiverId).emit("getMessage", data);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

app.use("/api/v1/kindergarten", JobPostRoute);
app.use("/api/v1/kindergarten", CutomerContactRoute);
app.use("/api/v1/kindergarten", getAllParent);
PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`the server listening of ${PORT} port`);
});
