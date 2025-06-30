import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default function PhoneNumberInput({ value, name, onChange }) {
  const handlePhoneChange = (value, country) => {
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
        onlyCountries={["tr"]}
        country={"tr"}
        inputStyle={{ width: "16rem" }}
        searchStyle={{ width: "16rem" }}
        dropdownStyle={{ width: "16rem" }}
        onChange={handlePhoneChange}
        value={value}
      />
    </div>
  );
}
