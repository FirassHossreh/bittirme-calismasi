import { useState } from "react";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderForPages from "../components/header-for-pages";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <HeaderForPages>
        <h1 className="text-white text-[2.5rem] p-5">İletişim</h1>
      </HeaderForPages>
      <div className="min-h-screen bg-white py-16 px-6">
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Her türlü soru, öneri ya da başvuru için bizimle iletişime
          geçebilirsiniz. Size yardımcı olmaktan memnuniyet duyarız.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* İletişim Bilgileri */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-[#007BFF] text-2xl"
              />
              <p className="text-gray-700">
                123 Anaokulu Sokak, İstanbul, Türkiye
              </p>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-[#007BFF] text-2xl"
              />
              <p className="text-gray-700">+90 212 123 45 67</p>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[#007BFF] text-2xl"
              />
              <p className="text-gray-700">info@anaokulumuz.com</p>
            </div>

            {/* Harita */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12034.893682460412!2d28.9783593!3d41.0082375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9f7a8e7f1b9%3A0x472e22bda95a273e!2zS2FzxLFrxLFrLCDDnE1lcGFz!5e0!3m2!1str!2str!4v1615976463543!5m2!1str!2str"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Okul Haritası"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#007BFF] p-6 rounded-xl shadow-md text-white"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-semibold">
                Ad Soyad
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1 font-semibold">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 rounded text-black"
                rows="4"
              />
            </div>
            <div className="w-ful flex justify-end">
              <button
                type="submit"
                className="bg-white text-[#007BFF] font-semibold px-4 py-2 rounded hover:bg-gray-100 "
              >
                Gönder
              </button>
            </div>
            {submitted && (
              <p className="mt-4 text-white">
                Mesajınız gönderildi, teşekkür ederiz.
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
