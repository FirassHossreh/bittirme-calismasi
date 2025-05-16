import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useLanguageOption from "../../../hooks/useLanguageOption";
import { useDispatch } from "react-redux";
import { handlephoneCountryChange } from "../../../store/slices/phoneCountrySlice";
export default function PhoneNumberInput({ value, name, onChange }) {
  const languageOption = useLanguageOption();
  const dispatch = useDispatch();
  const handlePhoneChange = (value, country) => {
    dispatch(handlephoneCountryChange(country.countryCode));
    onChange({
      target: {
        name: name,
        value: `+${value}`,
      },
    });
  };
  return (
    <div dir="ltr">
      <PhoneInput
        onlyCountries={["tr", "sy"]}
        country={languageOption === "ar" ? "sy" : "tr"}
        inputStyle={{ width: "16rem" }}
        searchStyle={{ width: "16rem" }}
        dropdownStyle={{ width: "16rem" }}
        onChange={handlePhoneChange}
      />
    </div>
  );
}
