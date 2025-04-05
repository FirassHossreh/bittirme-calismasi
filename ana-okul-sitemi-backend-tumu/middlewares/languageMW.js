const i18n = require("i18n");

function languageMW(req, res, next) {
  const lang =
    req.headers["accept-language"] ||
    process.env.DEFAULT_LANGUAGE ||
    i18n.setLocale(req, lang);
  next();
}

module.exports = languageMW;
