import { Button } from "@mui/material";
import CustomInput from "../../components/custom-input";
import FormTitle from "../../components/form-title";
import PhoneNumberInput from "../../components/phone-number-input";
import { useFormik } from "formik";
import CustomDropDown from "../../components/custom-drop-down";
import CustomTextArea from "../../components/cutom-text-area";
import { parentValidationSchema } from "../../validations/register-validation";
import { registerService } from "../../services/auth/register";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/slices/isAuthenticatedSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeTokenService } from "../../services/auth/remove-token";

export default function Register() {
  useEffect(() => {
    async function remove() {
      await removeTokenService();
    }
    remove();
  }, []);
  const initialValues = {
    name: "",
    surName: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
    address: "",
    parentType: "",
    child: "",
  };
  const {
    values,
    isSubmitting,
    handleChange,
    handleSubmit,
    errors,
    submitCount,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: parentValidationSchema,
    onSubmit: handleSubmitForm,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleSubmitForm(values, actions) {
    const result = await registerService({
      name: values.name,
      surName: values.surName,
      email: values.email,
      password: values.password,
      number: values.number,
      address: values.address,
      parentType: values.parentType,
      child: values.child,
    });
    actions.resetForm();
    if (result.status === 200) {
      navigate("/");
      dispatch(login());
    }
  }
  function handleclick() {}
  return (
    <>
      <div className="w-full flex justify-center items-center  top-0 my-4">
        <form
          className="w-96 flex flex-col items-center rounded gap-1"
          style={{ backgroundColor: "#007BFF" }}
          onSubmit={handleSubmit}
        >
          <FormTitle title="Kayit Olma" />
          <CustomInput
            name={"name"}
            label={"Isim"}
            placeholder={"Isiminiz Giriniz"}
            variant={"name"}
            onChange={handleChange}
            value={values.name}
            error={errors.name}
            submitCount={submitCount}
          />
          <CustomInput
            name={"surName"}
            label={"Soy Isim"}
            placeholder={"Soy Isiminiz Giriniz"}
            variant={"surname"}
            onChange={handleChange}
            value={values.surName}
            error={errors.surName}
            submitCount={submitCount}
          />
          <CustomInput
            name={"email"}
            label={"E-Mail"}
            placeholder={"E-Mail adresinizi girin"}
            variant={"email"}
            onChange={handleChange}
            value={values.email}
            error={errors.email}
            submitCount={submitCount}
          />

          <CustomInput
            name={"password"}
            label={"Şifre"}
            placeholder={"Şifrenizi girin"}
            variant={"password"}
            onChange={handleChange}
            value={values.password}
            error={errors.password}
            submitCount={submitCount}
          />

          <CustomInput
            name={"confirmPassword"}
            label={"Şifre Tekrarı"}
            placeholder={"Şifre Tekrarı Giriniz"}
            variant={"password"}
            onChange={handleChange}
            value={values.confirmPassword}
            error={errors.confirmPassword}
            submitCount={submitCount}
          />

          <CustomDropDown
            name={"parentType"}
            onChange={handleChange}
            value={values.parentType}
          />
          {submitCount > 0 && errors.parentType && (
            <p className="text-red-500 w-[16rem]">{errors.parentType}</p>
          )}
          <CustomInput
            name={"child"}
            label={"Çocuğun İsmi"}
            placeholder={"Çocuğunuz ismini Giriniz"}
            variant={"surname"}
            onChange={handleChange}
            value={values.child}
            error={errors.child}
            submitCount={submitCount}
          />

          <div className="flex flex-col gap-4 mt-4 ">
            <PhoneNumberInput
              onChange={handleChange}
              value={values.number}
              name={"number"}
            />
          </div>
          {submitCount > 0 && errors.number && (
            <p className="text-red-500 w-[16rem]">{errors.number}</p>
          )}
          <CustomTextArea
            onChange={handleChange}
            value={values.address}
            name={"address"}
          />
          {submitCount > 0 && errors.address && (
            <p className="text-red-500 w-[16rem]">{errors.address}</p>
          )}
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#0008ff",
              width: "16rem",
              marginBottom: "2rem",
              marginTop: "0.5rem",
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
