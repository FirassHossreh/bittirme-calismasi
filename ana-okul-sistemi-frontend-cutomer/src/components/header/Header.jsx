import Links from "../links/Links";
import Logo from "../logo/Logo";
import RegisterLogin from "../register-login-buttons/RegisterLoginButtons";
import "./header.css";
export default function Header() {
  return (
    <>
      <header>
        <Logo />
        <Links />
        <RegisterLogin />
      </header>
    </>
  );
}
