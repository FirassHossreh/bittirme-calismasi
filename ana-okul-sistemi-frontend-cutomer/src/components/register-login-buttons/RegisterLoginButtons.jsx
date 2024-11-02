import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./registerLoginButtons.css";
export default function RegisterLogin() {
  return (
    <>
      <div className="register-login">
        <a href="" className="login">
          <FontAwesomeIcon icon={faSignInAlt} />
          <br />
          login
        </a>
        <a href="" className="register">
          <FontAwesomeIcon icon={faUserPlus} />
          <br />
          register
        </a>
      </div>
    </>
  );
}
