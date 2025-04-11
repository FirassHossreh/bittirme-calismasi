import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useLanguageOption from "../../../hooks/useLanguageOption";

export default function PhoneNumberInput() {
  const languageOption = useLanguageOption();
  return (
    <div dir="ltr">
      <PhoneInput
        onlyCountries={["tr", "sy"]}
        country={languageOption === "ar" ? "sy" : "tr"}
        inputStyle={{ backgroundColor: "red", width: "16rem" }}
        searchStyle={{ width: "16rem" }}
        dropdownStyle={{ width: "16rem" }}
      />
    </div>
  );
}
