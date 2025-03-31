import { Bounce, ToastContainer } from "react-toastify";
import i18n from "./i18n";
import useLanguageOption from "../hooks/useLanguageOption";

export default function ToastConfig() {
  const languageOption = useLanguageOption();
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={languageOption === "ar"}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
