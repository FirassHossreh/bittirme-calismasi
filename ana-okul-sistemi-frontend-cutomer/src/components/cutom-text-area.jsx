import TextField from "@mui/material/TextField";

export default function CustomTextArea({
  onChange,
  value,
  name,
  label = "Adres",
  placeholder = "Adresinizi giriniz...",
  rows = 4,
}) {
  return (
    <TextField
      variant="standard"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      multiline
      rows={rows}
      placeholder={placeholder}
      sx={{
        width: "16rem",
        "& .MuiInputLabel-root.Mui-focused": {
          color: "white",
        },
        "& .MuiInputLabel-root": {
          color: "white",
        },
        "& .MuiInputBase-input": {
          color: "white",
        },
        "& .MuiInput-underline:before": {
          borderBottomColor: "white",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "white",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottomColor: "white !important",
        },
      }}
    />
  );
}
