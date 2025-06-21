const cryptoJS = require("crypto-js");
function tokenDecode(req, res, next) {
  const token = req.cookies["token"];
  const bytes = cryptoJS.AES.decrypt(token, process.env.JWT_SECRET);
  const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
  req.decryptedToken = decryptedToken;
  next();
}
module.exports = { tokenDecode };
