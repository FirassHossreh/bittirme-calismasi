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
} from "@fortawesome/free-solid-svg-icons";
import "./links.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Links() {
  const [tabsUnderCorporateDisplay, setTabsUnderCorporateDisplay] =
    useState("none");
  return (
    <div className="total-links">
      <div className="links">
        <Link to="/home" className="home">
          <FontAwesomeIcon icon={faHouse} />
          <br />
          Ana Sayfa
        </Link>
        <div
          className="corporate"
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
        <a href="" className="services">
          <FontAwesomeIcon icon={faBook} />
          <br />
          Hizmetler
        </a>
        <a href="" className="educational-programs">
          <FontAwesomeIcon icon={faGraduationCap} />
          <br />
          Egitim Program
        </a>
        <a href="" className="gallery">
          <FontAwesomeIcon icon={faPhotoFilm} />
          <br />
          Galeri
        </a>

        <a href="" className="contact">
          <FontAwesomeIcon icon={faEnvelope} />
          <br />
          Iletisim
        </a>
      </div>
      <div
        className="tabs-under-corporate"
        key={tabsUnderCorporateDisplay}
        onMouseEnter={() => {
          setTabsUnderCorporateDisplay("block");
        }}
        onMouseLeave={() => {
          setTabsUnderCorporateDisplay("none");
        }}
        style={{ display: tabsUnderCorporateDisplay }}
      >
        <Link to="/about" className="about-us">
          <FontAwesomeIcon icon={faInfoCircle} />
          Hakkimizda
        </Link>
        <hr />
        <Link href="/instructors" className="instructors">
          <FontAwesomeIcon icon={faChalkboardTeacher} />
          Egitmenler
        </Link>
        <hr />
        <Link href="/career" className="career">
          <FontAwesomeIcon icon={faBriefcase} />
          Kariyer
        </Link>
      </div>
    </div>
  );
}
