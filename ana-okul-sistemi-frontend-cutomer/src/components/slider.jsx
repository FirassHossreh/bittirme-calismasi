import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Slider() {
  const [photo, setPhoto] = useState(1);
  const [isLeftActive, setIsLeftActive] = useState(false);
  const [isRightActive, setIsRightActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhoto((prevPhoto) => (prevPhoto === 6 ? 1 : prevPhoto + 1));
    }, 10000);

    return () => clearTimeout(timer);
  }, [photo]);

  return (
    <div className="w-full flex items-center justify-between relative h-[550px] overflow-hidden">
      {/* Sol Buton */}
      <button
        className={`
          group border-none rounded-[4px] text-[30px] p-5 cursor-pointer z-[1000] ml-5 transition duration-500
          ${
            isLeftActive
              ? "bg-[#007bff] text-white"
              : "bg-[rgba(255,255,255,0.189)] text-[#007bff]"
          }
          hover:bg-[#007bff] hover:text-white
        `}
        onMouseDown={() => setIsLeftActive(true)}
        onMouseUp={() => setIsLeftActive(false)}
        onMouseLeave={() => setIsLeftActive(false)}
        onClick={() => {
          setPhoto(photo === 1 ? 6 : photo - 1);
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Fotoğraf */}
      <img
        key={photo}
        src={`/assets/${photo}.photo.jpg`}
        alt="slider"
        className="absolute w-full h-full object-cover animate-fadeIn"
      />

      {/* Sağ Buton */}
      <button
        className={`
          group border-none rounded-[4px] text-[30px] p-5 cursor-pointer z-[1000] mr-5 transition duration-500
          ${
            isRightActive
              ? "bg-[#007bff] text-white"
              : "bg-[rgba(255,255,255,0.189)] text-[#007bff]"
          }
          hover:bg-[#007bff] hover:text-white
        `}
        onMouseDown={() => setIsRightActive(true)}
        onMouseUp={() => setIsRightActive(false)}
        onMouseLeave={() => setIsRightActive(false)}
        onClick={() => {
          setPhoto(photo === 6 ? 1 : photo + 1);
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}
