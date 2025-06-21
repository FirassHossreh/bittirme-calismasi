import { Button } from "@mui/material";
import FileUploadModal from "../../components/file-upload-modal";
import CustomInput from "../../features/auth/components/cutom-input";
import FormTitle from "../../features/auth/components/form-title";
import PhoneNumberInput from "../../features/auth/components/phone-number-input";
import { useTranslation } from "react-i18next";
import useThemeColors from "../../hooks/useThemeColors";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { teacherRegistrationSchema } from "../../features/auth/validations/teacher-registration-validation";
import BirthDatePicker from "../../components/date-picker";
import { teacherRegistrationService } from "../../features/auth/services/teacher-registration";
export default function TeacherRegistration() {
  const { t } = useTranslation();
  const { secondaryColor, tertiaryColor } = useThemeColors();
  const [filename, setFileName] = useState();
  const selectedCountry = useSelector((state) => {
    return state.phoneCountrySliceReducer.phoneCountrySlice;
  });

  function handleUploadParent(file) {
    setFileName(file.name);
  }

  const initialValues = {
    name: "",
    surName: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
    photo: null,
  };
  const {
    values,
    isSubmitting,
    handleChange,
    handleSubmit,
    validateForm,
    errors,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: teacherRegistrationSchema(selectedCountry),
    onSubmit: onSubmit,
  });

  useEffect(() => {
    validateForm();
  }, [selectedCountry]);
  async function onSubmit(values, actions) {
    const formData = new FormData();
    console.log(selectedCountry + "rdfsdafafddsfasfdsfd");
    formData.append("name", values.name);
    formData.append("surName", values.surName);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("number", values.number);
    formData.append("countryCode", selectedCountry);
    formData.append("photo", values.photo);
    const result = await teacherRegistrationService(formData);
    actions.resetForm({
      values: {
        ...initialValues,
        number: selectedCountry === "sy" ? "963" : "90",
      },
    });
    setFileName("");
    console.log(actions);
  }
  function handleclick() {
    console.log(values);
    console.log(errors);
  }
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center  top-0">
        <form
          className="w-96 flex flex-col items-center rounded"
          style={{ backgroundColor: "#007BFF" }}
          onSubmit={handleSubmit}
        >
          <FormTitle title={"Personel Kaydı"} />
          <CustomInput
            name={"name"}
            label={t("name")}
            placeholder={t("name-place-holder")}
            variant={"name"}
            onChange={handleChange}
            value={values.name}
          />
          <CustomInput
            name={"surName"}
            label={t("surname")}
            placeholder={t("surname-place-holder")}
            variant={"surname"}
            onChange={handleChange}
            value={values.surName}
          />
          <CustomInput
            name={"email"}
            label={t("email")}
            placeholder={t("email-place-holder")}
            variant={"email"}
            onChange={handleChange}
            value={values.email}
          />
          <CustomInput
            name={"password"}
            label={t("password")}
            placeholder={t("password-place-holder")}
            variant={"password"}
            onChange={handleChange}
            value={values.password}
          />
          <CustomInput
            name={"confirmPassword"}
            label={t("repeat-password")}
            placeholder={t("repeat-password-place-holder")}
            variant={"password"}
            onChange={handleChange}
            value={values.confirmPassword}
          />
          <CustomInput
            name={"confirmPassword"}
            label={"Kayıt Türü"}
            placeholder={"Kayıt Türü"}
            variant={"permation"}
            onChange={handleChange}
            value={values.confirmPassword}
          />
          <BirthDatePicker />
          <div className="flex flex-col gap-4 mt-4 ">
            <PhoneNumberInput
              onChange={handleChange}
              value={values.number}
              name={"number"}
            />
            <FileUploadModal
              handleUploadParent={handleUploadParent}
              value={values.photo}
              onChange={handleChange}
              name={"photo"}
            />
          </div>
          <p className="text-white text-sm w-64 text-center my-2 break-words whitespace-normal ">
            {filename}
          </p>
          <Button
            variant="contained"
            sx={{
              color: secondaryColor,
              backgroundColor: tertiaryColor,
              width: "16rem",
              marginBottom: "2rem",
            }}
            type="submit"
            disabled={isSubmitting}
            onClick={handleclick}
          >
            register
          </Button>
        </form>
      </div>
    </>
  );
}
