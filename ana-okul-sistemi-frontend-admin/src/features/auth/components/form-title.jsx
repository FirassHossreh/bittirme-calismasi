import { InputLabel } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SECONDARY_LIGHT_COLOR } from "../../../constants/colors";

export default function FormTitle({ title }) {
  const { t } = useTranslation();
  return (
    <>
      <InputLabel
        id="label"
        sx={{
          color: SECONDARY_LIGHT_COLOR,
          marginTop: "2.5rem",
          marginBottom: "2.5rem",
          fontSize: "1.5rem",
          lineHeight: "2rem",
        }}
      >
        {t(title)}
      </InputLabel>
    </>
  );
}
