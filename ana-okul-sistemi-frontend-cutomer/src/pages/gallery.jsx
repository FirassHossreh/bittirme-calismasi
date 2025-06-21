import { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoPhoto from "../assets/logo/Colorful Pastel Kindergarten Logo.png";
import HeaderForPages from "../components/header-for-pages";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <HeaderForPages>
        <h1 className="text-white text-[2.5rem] p-5">Galeri</h1>
      </HeaderForPages>

      <div className="bg-gray-100 min-h-screen p-6">
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {images.map((src, index) => (
            <div key={index} className="cursor-pointer">
              <img
                src={LogoPhoto}
                alt={`Galeri ${index + 1}`}
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(LogoPhoto)}
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative bg-white rounded-xl shadow-lg max-w-md w-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
                onClick={() => setSelectedImage(null)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <img
                src={selectedImage}
                alt="Selected"
                className="rounded-md max-h-[70vh] mx-auto"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
