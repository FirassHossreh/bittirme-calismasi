import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./slider.css";
import { useEffect, useState } from "react";
export default function Slider() {
  const [photo, setPhoto] = useState(1);
  const [buttonRightStyle, setButtonRightStyle] = useState({
    backgroundColor: "",
    color: "",
  });
  const [buttonleftStyle, setButtonLeftStyle] = useState({
    backgroundColor: "",
    color: "",
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhoto((prevPhoto) => (prevPhoto === 6 ? 1 : prevPhoto + 1));
    }, 10000);

    return () => clearTimeout(timer);
  }, [photo]);
  return (
    <>
      <div className="slider">
        <button
          onMouseDown={() => {
            setButtonLeftStyle({
              backgroundColor: "#007bff",
              color: "white",
            });
          }}
          onMouseUp={() => {
            setButtonLeftStyle({
              backgroundColor: "rgba(255, 255, 255, 0.189)",
              color: "#007bff",
            });
          }}
          className="swipe-left"
          onClick={() => {
            if (photo === 1) {
              setPhoto(6);
            } else {
              setPhoto(photo - 1);
            }
          }}
          style={{
            backgroundColor: buttonleftStyle.backgroundColor,
          }}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ color: buttonleftStyle.color || "#007bff" }}
          />
        </button>
        <img key={photo} src={`/assets/${photo}.photo.jpg`} alt="hata" />
        <button
          className="swipe-right"
          onMouseDown={() => {
            setButtonRightStyle({
              backgroundColor: "#007bff",
              color: "white",
            });
          }}
          onMouseUp={() => {
            setButtonRightStyle({
              backgroundColor: "rgba(255, 255, 255, 0.189)",
              color: "#007bff",
            });
          }}
          onClick={() => {
            if (photo === 6) {
              setPhoto(1);
            } else {
              setPhoto(photo + 1);
            }
          }}
          style={{
            backgroundColor: buttonRightStyle.backgroundColor,
          }}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ color: buttonRightStyle.color || "#007bff" }}
          />
        </button>
      </div>
    </>
  );
}
