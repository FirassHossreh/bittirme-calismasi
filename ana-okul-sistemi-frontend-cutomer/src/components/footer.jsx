import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "./logo";
export default function Footer() {
  return (
    <>
      <footer className="bg-primary-light-color flex flex-wrap pt-2.5 mt-2.5 w-full justify-around">
        <div className="flex justify-center items-center w-96 my-4">
          <p className="text-white">
            &copy; 2024 Fanasan. Tüm hakları saklıdır.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col mb-2.5 w-96  my-4">
          <h2 className="text-white mb-3">AÇILIŞ SAATLERİ</h2>
          <div className="rounded bg-[#bac4cf5e] p-2.5 mx-auto w-80">
            <ul className="list-none flex justify-between">
              <li className="mb-[5px] text-white">Pazartesi : </li>
              <li className="mb-[5px] text-white">07:30 - 19:00</li>
            </ul>
            <ul className="list-none flex justify-between">
              <li className="mb-[5px] text-white">Salı :</li>
              <li className="mb-[5px] text-white">07:30 - 19:00</li>
            </ul>
            <ul className="list-none flex justify-between">
              <li className="mb-[5px] text-white">Çarşamba :</li>
              <li className="mb-[5px] text-white">07:30 - 19:00</li>
            </ul>
            <ul className="list-none flex justify-between">
              <li className="mb-[5px] text-white">Perşembe :</li>
              <li className="mb-[5px] text-white">07:30 - 19:00</li>
            </ul>
            <ul className="list-none flex justify-between">
              <li className="mb-[5px] text-white">Cuma :</li>
              <li className="mb-[5px] text-white">07:30 - 19:00</li>
            </ul>
            <ul className="list-none flex justify-between">
              <li className="mb-[5px] text-white">Cumartesi :</li>
              <li className="mb-[5px] text-white">Kapalı</li>
            </ul>
            <ul className="list-none flex justify-between">
              <li className="mb-[5px] text-white">Pazar :</li>
              <li className="mb-[5px] text-white">Kapalı</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col w-96 my-4">
          <Logo />
          <br />
          <p className="capitalize font-bold text-white">bizi takip edin</p>
          <br />
          <div className="w-full flex justify-around mb-5">
            <a
              href="https://www.instagram.com/"
              className="inline-block transition-transform duration-500 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] hover:scale-110"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="inline-block transition-transform duration-500 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] hover:scale-110"
            >
              <FontAwesomeIcon icon={faXTwitter} size="2x" color="white" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="inline-block transition-transform duration-500 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] hover:scale-110"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="inline-block transition-transform duration-500 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] hover:scale-110"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" color="white" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
