const path = require("path");
const i18n = require("i18n");

i18n.configure({
  locales: ["en", "tr", "ar"], // Dil dosya isimleri
  directory: path.join(__dirname, "languages"), // Çeviri dosyalarının olduğu klasör
  defaultLocale: process.env.DEFAULT_LANGUAGE, // Varsayılan dil
  objectNotation: true, // Nesne şeklinde çeviri desteği
  updateFiles: true, // Eksik anahtarları otomatik ekler ve dosya oluşturur
});

module.exports = i18n;
