import { InputLabel } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function FormTitle({ title }) {
  const { t } = useTranslation();
  return (
    <>
      <InputLabel id="label" className="!text-white my-10 !text-2xl">
        {t(title)}
      </InputLabel>
    </>
  );
}
