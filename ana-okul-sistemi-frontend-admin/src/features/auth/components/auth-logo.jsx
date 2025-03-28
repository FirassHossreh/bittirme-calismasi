import { Link } from "react-router-dom";
import Logo from "../../../assets/fanasan-logo.png";
export default function AuthLogo() {
  return (
    <>
      <Link to="/login">
        <img src={Logo} alt="auth-logo" />
      </Link>
    </>
  );
}
