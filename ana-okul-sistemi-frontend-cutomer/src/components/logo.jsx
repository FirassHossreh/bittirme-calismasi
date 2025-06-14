import LogoPhoto from "./../assets/logo/Colorful Pastel Kindergarten Logo.png";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <>
      <div className="w-1/5 bg-white">
        <Link
          to="/"
          className="w-full flex justify-center overflow-hidden group"
        >
          <img
            src={LogoPhoto}
            alt="logo-hata"
            className="w-[6.25rem] h-full transition-transform duration-1000 group-hover:scale-150 group-hover:rotate-[360deg]"
          />
        </Link>
      </div>
    </>
  );
}
