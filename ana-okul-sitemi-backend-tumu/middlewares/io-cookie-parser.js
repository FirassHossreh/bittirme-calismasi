const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
ioCookieParser = (io) => {
  io.use((socket, next) => {
    const cookies = socket.handshake.headers.cookie;
    if (!cookies) return next(new Error("Cookie bulunamadı"));

    const parsed = cookie.parse(cookies);
    const encryptedToken = parsed["token"]; // Cookie'deki şifreli token

    if (!encryptedToken) return next(new Error("Token bulunamadı"));

    try {
      // 🔐 Şifreli token'ı çöz
      const bytes = CryptoJS.AES.decrypt(
        encryptedToken,
        process.env.CRYPTOJS_SECRET_KEY
      );
      const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);

      if (!decryptedToken) return next(new Error("Token çözülemedi"));

      // ✅ JWT verify
      const decoded = jwt.verify(decryptedToken, process.env.SECRET_KEY);
      socket.userId = decoded.id; // Artık token'dan gelen kullanıcı bilgisi burada

      next();
    } catch (err) {
      console.error("Token doğrulama hatası:", err.message);
      return next(new Error("Geçersiz token"));
    }
  });
};
module.exports = {
  ioCookieParser,
};
