const removeToken = (req, res) => {
  const token = req.cookies["token"];
  if (token) {
    res.clearCookie("token");
    return res.status(200).json({ message: "Çıkış yapıldı" });
  } else {
    return res.status(200).json({ message: "zaten token yok", type: 2 });
  }
};
module.exports = { removeToken };
