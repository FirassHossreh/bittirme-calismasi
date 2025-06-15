import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhotoFilm,
  faBook,
  faGraduationCap,
  faBriefcase,
  faEnvelope,
  faChalkboardTeacher,
  faBuilding,
  faInfoCircle,
  faBars,
  faSignInAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
export default function Header() {
  const [tabsUnderCorporateDisplay, setTabsUnderCorporateDisplay] =
    useState("none");
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const handleOverlayClick = () => {
    setOpenBurgerMenu(false);
  };
  return (
    <>
      <header className="w-[80%] flex bg-white mx-auto text-[#85c1ff] ">
        <div className="flex justify-between items-center sm:hidden w-full">
          <Logo />
          <FontAwesomeIcon
            icon={faBars}
            className="text-2xl"
            onClick={() => setOpenBurgerMenu((prev) => !prev)}
          />
        </div>
        <div className="hidden w-full sm:flex md:flex lg:flex xl:flex bg-white mx-auto text-[#85c1ff]">
          <Logo />
          <div className="w-[80%] items-center relative hidden sm:flex md:flex lg:flex xl:flex">
            <div className="w-full h-full flex items-center">
              <Link
                to="/home"
                className="no-underline w-[calc(100%/6)] h-full flex justify-center items-center flex-col text-[#007bff] transition duration-500 hover:bg-[#007bff] hover:text-white"
              >
                <FontAwesomeIcon icon={faHouse} />
                <br />
                Ana Sayfa
              </Link>
              <div
                className="no-underline w-[calc(100%/6)] h-full flex justify-center items-center flex-col text-[#007bff] transition duration-500 hover:bg-[#007bff] hover:text-white"
                onMouseEnter={() => {
                  setTabsUnderCorporateDisplay("block");
                }}
                onMouseLeave={() => {
                  setTabsUnderCorporateDisplay("none");
                }}
              >
                <FontAwesomeIcon icon={faBuilding} />
                <br />
                Kurumsal
              </div>
              <a
                href=""
                className="no-underline w-[calc(100%/6)] h-full flex justify-center items-center flex-col text-[#007bff] transition duration-500 hover:bg-[#007bff] hover:text-white"
              >
                <FontAwesomeIcon icon={faBook} />
                <br />
                Hizmetler
              </a>
              <a
                href=""
                className="no-underline w-[calc(100%/6)] h-full flex justify-center items-center flex-col text-[#007bff] transition duration-500 hover:bg-[#007bff] hover:text-white"
              >
                <FontAwesomeIcon icon={faGraduationCap} />
                <br />
                Egitim Program
              </a>
              <a
                href=""
                className="no-underline w-[calc(100%/6)] h-full flex justify-center items-center flex-col text-[#007bff] transition duration-500 hover:bg-[#007bff] hover:text-white"
              >
                <FontAwesomeIcon icon={faPhotoFilm} />
                <br />
                Galeri
              </a>

              <a
                href=""
                className="no-underline w-[calc(100%/6)] h-full flex justify-center items-center flex-col text-[#007bff] transition duration-500 hover:bg-[#007bff] hover:text-white"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <br />
                Iletisim
              </a>
              <Link
                to="login"
                className="no-underline w-[calc(100%/6)] h-full flex justify-center items-center flex-col text-[#007bff] transition duration-500 hover:bg-[#007bff] hover:text-white"
              >
                <FontAwesomeIcon icon={faSignInAlt} />
                <br />
                Giriş
              </Link>
              <Link
                to="register"
                className="no-underline w-[calc(100%/6)] h-full flex justify-center items-center flex-col text-[#007bff] transition duration-500 hover:bg-[#007bff] hover:text-white"
              >
                <FontAwesomeIcon icon={faUserPlus} />
                <br />
                Kayd olma
              </Link>
            </div>
            <div
              className="absolute left-[123px] top-[100px] z-[2000] bg-white flex flex-col"
              key={tabsUnderCorporateDisplay}
              onMouseEnter={() => {
                setTabsUnderCorporateDisplay("block");
              }}
              onMouseLeave={() => {
                setTabsUnderCorporateDisplay("none");
              }}
              style={{ display: tabsUnderCorporateDisplay }}
            >
              <Link
                to="/about"
                className="no-underline h-full flex text-[#007bff] transition duration-500 p-5 hover:bg-[#007bff] hover:text-white"
              >
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2.5" />
                Hakkimizda
              </Link>
              <hr />
              <Link
                to="/instructors"
                className="no-underline h-full flex text-[#007bff] transition duration-500 p-5 hover:bg-[#007bff] hover:text-white"
              >
                <FontAwesomeIcon
                  icon={faChalkboardTeacher}
                  className="mr-2.5"
                />
                Egitmenler
              </Link>
              <hr />
              <Link
                to="/career"
                className="no-underline h-full flex text-[#007bff] transition duration-500 p-5 hover:bg-[#007bff] hover:text-white"
              >
                <FontAwesomeIcon icon={faBriefcase} className="mr-2.5" />
                Kariyer
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile Burger Menü Yan Panel + Overlay */}
        {openBurgerMenu && (
          <>
            {/* Koyu arka plan */}
            <div
              onClick={handleOverlayClick}
              className="fixed inset-0 bg-black bg-opacity-50 z-[1050]"
            ></div>

            {/* Yan menü */}
            <nav className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col p-5 space-y-4 z-[1100]">
              <Link
                to="/home"
                onClick={() => setOpenBurgerMenu(false)}
                className="flex items-center space-x-2 text-[#007bff] hover:bg-[#007bff] hover:text-white p-3 rounded transition duration-300 no-underline"
              >
                <FontAwesomeIcon icon={faHouse} />
                <span>Ana Sayfa</span>
              </Link>

              <div className="flex flex-col">
                <span className="flex items-center space-x-2 text-[#007bff] cursor-pointer p-3 rounded hover:bg-[#007bff] hover:text-white transition duration-300">
                  <FontAwesomeIcon icon={faBuilding} />
                  <span>Kurumsal</span>
                </span>
                <div className="pl-5 flex flex-col space-y-2">
                  <Link
                    to="/about"
                    onClick={() => setOpenBurgerMenu(false)}
                    className="text-[#007bff] hover:bg-[#007bff] hover:text-white p-2 rounded no-underline"
                  >
                    Hakkimizda
                  </Link>
                  <Link
                    to="/instructors"
                    onClick={() => setOpenBurgerMenu(false)}
                    className="text-[#007bff] hover:bg-[#007bff] hover:text-white p-2 rounded no-underline"
                  >
                    Egitmenler
                  </Link>
                  <Link
                    to="/career"
                    onClick={() => setOpenBurgerMenu(false)}
                    className="text-[#007bff] hover:bg-[#007bff] hover:text-white p-2 rounded no-underline"
                  >
                    Kariyer
                  </Link>
                </div>
              </div>

              {/* Diğer menü öğeleri */}
              <a
                href=""
                className="flex items-center space-x-2 text-[#007bff] hover:bg-[#007bff] hover:text-white p-3 rounded transition duration-300"
                onClick={() => setOpenBurgerMenu(false)}
              >
                <FontAwesomeIcon icon={faBook} />
                <span>Hizmetler</span>
              </a>
              <a
                href=""
                className="flex items-center space-x-2 text-[#007bff] hover:bg-[#007bff] hover:text-white p-3 rounded transition duration-300"
                onClick={() => setOpenBurgerMenu(false)}
              >
                <FontAwesomeIcon icon={faGraduationCap} />
                <span>Egitim Program</span>
              </a>
              <a
                href=""
                className="flex items-center space-x-2 text-[#007bff] hover:bg-[#007bff] hover:text-white p-3 rounded transition duration-300"
                onClick={() => setOpenBurgerMenu(false)}
              >
                <FontAwesomeIcon icon={faPhotoFilm} />
                <span>Galeri</span>
              </a>
              <a
                href=""
                className="flex items-center space-x-2 text-[#007bff] hover:bg-[#007bff] hover:text-white p-3 rounded transition duration-300"
                onClick={() => setOpenBurgerMenu(false)}
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Iletisim</span>
              </a>
              <Link
                to="login"
                className="flex items-center space-x-2 text-[#007bff] hover:bg-[#007bff] hover:text-white p-3 rounded transition duration-300"
                onClick={() => setOpenBurgerMenu(false)}
              >
                <FontAwesomeIcon icon={faSignInAlt} />
                <span>Login</span>
              </Link>
              <Link
                to="register"
                className="flex items-center space-x-2 text-[#007bff] hover:bg-[#007bff] hover:text-white p-3 rounded transition duration-300"
                onClick={() => setOpenBurgerMenu(false)}
              >
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Register</span>
              </Link>
            </nav>
          </>
        )}
      </header>
    </>
  );
}
