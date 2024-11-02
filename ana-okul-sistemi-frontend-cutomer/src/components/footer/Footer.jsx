import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../logo/Logo";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="copy-right">
          <p>&copy; 2024 Fanasan. Tüm hakları saklıdır.</p>
        </div>
        <div className="opening-hours">
          <h2>AÇILIŞ SAATLERİ</h2>
          <div className="opening-hourse-container">
            <ul>
              <li>Pazartesi : </li>
              <li>07:30 - 19:00</li>
            </ul>
            <ul>
              <li>Salı :</li>
              <li>07:30 - 19:00</li>
            </ul>
            <ul>
              <li>Çarşamba :</li>
              <li>07:30 - 19:00</li>
            </ul>
            <ul>
              <li>Perşembe :</li>
              <li>07:30 - 19:00</li>
            </ul>
            <ul>
              <li>Cuma :</li>
              <li>07:30 - 19:00</li>
            </ul>
            <ul>
              <li>Cumartesi :</li>
              <li>Kapalı</li>
            </ul>
            <ul>
              <li>Pazar :</li>
              <li>Kapalı</li>
            </ul>
          </div>
        </div>
        <div className="contact">
          <Logo />
          <br />
          <p>bizi takip edin</p>
          <br />
          <div className="footer-links">
            <a href="https://www.instagram.com/" className="instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
            </a>
            <a href="https://www.instagram.com/" className="X">
              <FontAwesomeIcon icon={faXTwitter} size="2x" color="white" />
            </a>
            <a href="https://www.instagram.com/" className="facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
            </a>
            <a href="https://www.instagram.com/" className="youtube">
              <FontAwesomeIcon icon={faYoutube} size="2x" color="white" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
