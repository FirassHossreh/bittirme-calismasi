import "./logo.css";
import LogoPhoto from "../../assets/logo/Colorful Pastel Kindergarten Logo.png";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <>
      <div className="logo">
        <Link to="/" className="logo-a">
          <img src={LogoPhoto} alt="" />
        </Link>
      </div>
    </>
  );
}
