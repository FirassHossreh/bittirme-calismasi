import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderForPages from "../components/header-for-pages";
import { useFormik } from "formik";
import { contactValdiation } from "../validations/contact-validation";
import { sendEmailService } from "../services/send-email/send-email-service";
export default function Contact() {
  const { handleSubmit, values, handleChange, isSubmitting, errors, touched } =
    useFormik({
      initialValues: {
        nameAndSurname: "",
        email: "",
        description: "",
      },
      validationSchema: contactValdiation,
      onSubmit: handleOnSubmitForm,
    });
  async function handleOnSubmitForm(values, actions) {
    await sendEmailService(values);
    actions.resetForm();
  }
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
              <label
                htmlFor="nameAndSurname"
                className="block mb-1 font-semibold"
              >
                Ad Soyad
              </label>
              <input
                type="text"
                id="nameAndSurname"
                name="nameAndSurname"
                value={values.nameAndSurname}
                onChange={handleChange}
                className="w-full p-2 rounded text-black"
                style={
                  touched.nameAndSurname && errors.nameAndSurname
                    ? { border: "2px red solid" }
                    : {}
                }
              />
              <p className="text-red-500 font-bold">
                {touched.nameAndSurname && errors.nameAndSurname
                  ? errors.nameAndSurname
                  : ""}
              </p>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-semibold">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="w-full p-2 rounded text-black"
                style={
                  touched.email && errors.email
                    ? { border: "2px red solid" }
                    : {}
                }
              />
              <p className="text-red-500 font-bold">
                {touched.email && errors.email ? errors.email : ""}
              </p>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block mb-1 font-semibold">
                Mesaj
              </label>
              <textarea
                id="description"
                name="description"
                value={values.description}
                onChange={handleChange}
                className={`w-full p-2 rounded text-black `}
                style={
                  touched.description && errors.description
                    ? { border: "2px red solid" }
                    : {}
                }
                rows="4"
              />
              <p className="text-red-500 font-bold">
                {touched.description && errors.description
                  ? errors.description
                  : ""}
              </p>
            </div>
            <div className="w-ful flex justify-end">
              <button
                type="submit"
                className="bg-white text-[#007BFF] font-semibold px-4 py-2 rounded hover:bg-gray-100 "
                disabled={isSubmitting}
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
