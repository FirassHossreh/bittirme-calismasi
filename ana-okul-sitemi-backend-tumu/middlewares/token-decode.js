const cryptoJS = require("crypto-js");
function tokenDecode(req, res, next) {
  const token = req.cookies["token"];
  // console.log("Gelen token:", token);
  if (!token) {
    res.json({ message: "token yok" });
  }
  const bytes = cryptoJS.AES.decrypt(token, process.env.CRYPTOJS_SECRET_KEY);
  const decryptedToken = bytes.toString(cryptoJS.enc.Utf8);
  req.decryptedToken = decryptedToken;
  next();
  // console.log("Çözülen token:", req.decryptedToken);
}
module.exports = { tokenDecode };
