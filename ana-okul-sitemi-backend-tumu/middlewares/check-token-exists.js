function checkTokenExists(req, res, next) {
  if (req.cookies["token"]) {
    return next();
  } else {
    return res.status(401).json({ message: "giris yapmaniz gerekiyor" });
  }
}
module.exports = {
  checkTokenExists,
};
