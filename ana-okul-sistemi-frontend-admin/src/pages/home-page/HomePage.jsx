import { useState } from "react";
import adminLoginService from "../../services/admin-login-service/adminLoginService";
import "./homePage.css";
import Toast from "../../components/toast/Toast";
import { useToast } from "../../providers/ToastProvider";
import Cookies from "universal-cookie";

export default function HomePage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState("");
  const { open, setOpen } = useToast();

  function handleTostMessage() {
    if (response.status === 200) {
      return <Toast status="success" content="basarili bir giris yapildi" />;
    } else if (response.status === 401) {
      return <Toast status="error" content="email yada sifre hatali" />;
    } else if (response.status === 400) {
      return <Toast status="error" content="yanlis formatta bir girirs" />;
    }
  }
  return (
    <>
      <div className="Homepage">
        <div className="login-card">
          <h1 className="login-card-header">Admin Login</h1>
          <form
            className="form-of-login-page"
            onSubmit={async (event) => {
              event.preventDefault();
              setResponse(await adminLoginService(user));
              setOpen(true);
              const cookie =new Cookies()
              console.log(response.status)
              cookie.set(response.status)
            }}
          >
            <input
              type="email"
              className="email-input"
              placeholder="E-mail"
              value={user.email}
              onChange={(event) => {
                setUser({ ...user, email: event.target.value });
              }}
            />
            <input
              type="password"
              className="password-input"
              placeholder="Password"
              value={user.password}
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
            />
            <input type="submit" className="submit-input" />
          </form>
        </div>
        {handleTostMessage()}
      </div>
    </>
  );
}
