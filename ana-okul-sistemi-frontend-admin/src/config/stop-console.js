import appSettings from "./app-settings.json";
if (appSettings.ENVIRONMENT === "PRODUCTION") {
  console.error = () => {}; // console.error'ı boş bir fonksiyona yönlendir
  console.log = () => {}; // console.log'ı engelle
  console.clear();
}
