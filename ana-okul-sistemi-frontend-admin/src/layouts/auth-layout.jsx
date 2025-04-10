import { Outlet } from "react-router-dom";
import ThemeSelector from "../components/theme-selector";
import AuthLogo from "../features/auth/components/auth-logo";
import LanguageSelector from "../components/language-selector";
import useLanguageOption from "../hooks/useLanguageOption";

export default function AuthLayout() {
  const languageOption = useLanguageOption();
  return (
    <>
      <header
        dir={languageOption === "ar" ? "rtl" : "ltr"}
        className="relative "
      >
        <div className="flex justify-between items-center relative z-10">
          <div className="w-24 h-24 m-2">
            <AuthLogo />
          </div>
          <div className="flex items-center gap-4 m-2">
            <ThemeSelector />
            <LanguageSelector />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
