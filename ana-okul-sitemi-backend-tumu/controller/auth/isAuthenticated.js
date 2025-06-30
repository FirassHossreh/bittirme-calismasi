const AsyncHandler = require("express-async-handler");

const isAuthenticated = AsyncHandler((req, res) => {
  if (!req.cookies["token"]) {
    return res.status(401).json({ message: "Yetkisiz" });
  }

  res.status(200).json({ user: req.user });
});
module.exports = { isAuthenticated };
