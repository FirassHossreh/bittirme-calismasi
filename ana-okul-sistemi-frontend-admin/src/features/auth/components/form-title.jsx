import { InputLabel } from "@mui/material";

export default function FormTitle({ title }) {
  return (
    <>
      <InputLabel id="label" className="!text-white my-10 !text-2xl">
        {title}
      </InputLabel>
    </>
  );
}
