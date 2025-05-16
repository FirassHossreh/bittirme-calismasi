const jwt = require("jsonwebtoken");

const IsAuthenticated = (req, res) => {
  const token = req.cookies["token"];
  if (!token) {
    return res.status(401).json({ message: req.__("token_invalid") });
  }
  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    return res.status(200).json({ id: user.id, email: user.email });
  } catch (err) {
    console.error("JWT error:", err);
    return res
      .status(401)
      .json({ message: "Invalid or expired token", type: 2 });
  }
};
const removeToken = (req, res) => {
  const token = req.cookies["token"];
  if (token) {
    res.clearCookie("token");
    return res.status(200).json({ message: "Çıkış yapıldı" });
  } else {
    return res.status(200).json({ message: "zaten token yok", type: 2 });
  }
};
module.exports = {
  IsAuthenticated,
  removeToken,
};
