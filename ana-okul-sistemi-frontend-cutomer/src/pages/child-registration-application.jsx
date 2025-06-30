import HeaderForPages from "../components/header-for-pages";
import { useFormik } from "formik";
import { childRegistrationApplication } from "../validations/child-registration-application-validation";
import { createApplicationService } from "../services/child-registration-application/create-application-service";
import { useEffect, useState } from "react";
import { getApplicationService } from "../services/child-registration-application/get-application-service";

export default function ChildRegistrationApplication() {
  const {
    handleSubmit,
    values,
    handleChange,
    isSubmitting,
    errors,
    submitCount,
  } = useFormik({
    initialValues: {
      childFirstName: "",
      childSurName: "",
      gender: "",
      birthDate: "",
      motherName: "",
      fatherName: "",
      address: "",
      parentEmail: "",
      parentPhone: "",
    },
    validationSchema: childRegistrationApplication,
    onSubmit: handleOnSubmitForm,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function getStatusForApplication() {
      const result = await getApplicationService();
      if (result?.status) {
        setStatus(result.status);
      }
    }
    getStatusForApplication();
  }, [values.childFirstName]);

  useEffect(() => {
    if (status === "pending" || status === "approved") {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  }, [status]);
  async function handleOnSubmitForm(values, actions) {
    const result = await createApplicationService(values);
    actions.resetForm();
    setIsSubmitted(true);
    console.log(result);
  }

  return (
    <>
      <HeaderForPages>
        <h1 className="text-white text-[2.5rem] p-5">Başvuru Formu</h1>
      </HeaderForPages>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b  px-4 py-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-10 space-y-6 border border-blue-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Çocuğun Adı"
              name="childFirstName"
              id="childFirstName"
              value={values.childFirstName}
              onChange={handleChange}
              error={errors.childFirstName}
              submitCount={submitCount}
              isSubmitted={isSubmitted}
            />
            <Input
              label="Çocuğun Soyadı"
              name="childSurName"
              id="childSurName"
              value={values.childSurName}
              onChange={handleChange}
              error={errors.childSurName}
              submitCount={submitCount}
              isSubmitted={isSubmitted}
            />

            <Select
              label="Cinsiyet"
              name="gender"
              id="gender"
              value={values.gender}
              onChange={handleChange}
              options={[
                { label: "Seçiniz", value: "" },
                { label: "Kız", value: "Kız" },
                { label: "Erkek", value: "Erkek" },
              ]}
              error={errors.gender}
              submitCount={submitCount}
              isSubmitted={isSubmitted}
            />

            <Input
              label="Doğum Tarihi"
              name="birthDate"
              id="birthDate"
              type="date"
              value={values.birthDate}
              onChange={handleChange}
              error={errors.birthDate}
              submitCount={submitCount}
              isSubmitted={isSubmitted}
            />

            <Input
              label="Anne Adı"
              name="motherName"
              id="motherName"
              value={values.motherName}
              onChange={handleChange}
              error={errors.motherName}
              submitCount={submitCount}
              isSubmitted={isSubmitted}
            />
            <Input
              label="Baba Adı"
              name="fatherName"
              id="fatherName"
              value={values.fatherName}
              onChange={handleChange}
              error={errors.fatherName}
              submitCount={submitCount}
              isSubmitted={isSubmitted}
            />

            <Textarea
              label="Adres"
              name="address"
              id="address"
              value={values.address}
              onChange={handleChange}
              className="md:col-span-2"
              error={errors.address}
              submitCount={submitCount}
              isSubmitted={isSubmitted}
            />
            <Input
              label="Ebeveyn E-posta"
              name="parentEmail"
              id="parentEmail"
              type="text"
              value={values.parentEmail}
              onChange={handleChange}
              error={errors.parentEmail}
              submitCount={submitCount}
              isSubmitted={isSubmitted}
            />
            <Input
              label="Ebeveyn Telefon Numarası"
              name="parentPhone"
              id="parentPhone"
              type="tel"
              value={values.parentPhone}
              onChange={handleChange}
              error={errors.parentPhone}
              submitCount={submitCount}
              isSubmitted={isSubmitted}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitted && !isSubmitting}
            className="w-full py-3 bg-[#007BFF] text-white font-semibold text-lg rounded-xl hover:bg-[#005fcc] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Başvuruyu Gönder
          </button>
        </form>
      </div>
      {isSubmitted && (
        <div className="flex justify-center my-10">
          <div className="bg-white border border-[#007BFF] shadow-md rounded-xl px-6 py-4 w-full max-w-xl flex items-center space-x-4 justify-center">
            <div className="text-2xl">✅</div>
            <div className="text-[#007BFF] text-lg font-semibold">
              Başvurunuz başarıyla alındı. <br />
              Durum: <span className="font-bold">({status})</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  className = "",
  error,
  submitCount,
  isSubmitted,
  id,
}) {
  return (
    <div className={`${className} flex flex-col`}>
      <label htmlFor={name} className="text-gray-600 mb-1 font-medium">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF] transition"
        disabled={isSubmitted}
      />
      {submitCount > 0 && error && <p className="text-red-500">{error}</p>}{" "}
    </div>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  submitCount,
  isSubmitted,
  id,
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-gray-600 mb-1 font-medium">
        {label}
      </label>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF] transition"
        disabled={isSubmitted}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {submitCount > 0 && error && <p className="text-red-500">{error}</p>}{" "}
    </div>
  );
}

function Textarea({
  label,
  name,
  value,
  onChange,
  className = "",
  error,
  submitCount,
  isSubmitted,
  id,
}) {
  return (
    <div className={`${className} flex flex-col`}>
      <label htmlFor={name} className="text-gray-600 mb-1 font-medium">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="rounded-lg border border-gray-300 px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#007BFF] transition"
        disabled={isSubmitted}
      />
      {submitCount > 0 && error && <p className="text-red-500">{error}</p>}{" "}
    </div>
  );
}
