import FileUploadModal from "../../components/file-upload-modal";
import CustomInput from "../../features/auth/components/cutom-input";
import FormTitle from "../../features/auth/components/form-title";
import PhoneNumberInput from "../../features/auth/components/phone-number-input";
import { useTranslation } from "react-i18next";
export default function TeacherRegistration() {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center absolute top-0">
        <form
          className="w-96 flex flex-col items-center"
          style={{ backgroundColor: "#007BFF" }}
        >
          <FormTitle title={t("teacher-register")} />
          <CustomInput
            name={"name"}
            label={t("name")}
            placeholder={t("name-place-holder")}
            variant={"name"}
          />
          <CustomInput
            name={"surname"}
            label={t("surname")}
            placeholder={t("surname-place-holder")}
            variant={"surname"}
          />
          <CustomInput
            name={"password"}
            label={t("password")}
            placeholder={t("password-place-holder")}
            variant={"password"}
          />
          <CustomInput
            name={"repeatPassword"}
            label={t("repeat-password")}
            placeholder={t("repeat-password-place-holder")}
            variant={"password"}
          />
          <div className="flex flex-col gap-4 mt-4">
            <PhoneNumberInput />
            <FileUploadModal />
          </div>
        </form>
      </div>
    </>
  );
}
