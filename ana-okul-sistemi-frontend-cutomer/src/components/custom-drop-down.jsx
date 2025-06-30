import { TextField, MenuItem } from "@mui/material";

export default function CustomSelect({
  value,
  onChange,
  name,
  label = "Veli Tipi",
}) {
  return (
    <TextField
      select
      variant="standard"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      sx={{
        width: "16rem",
        marginTop: "0.5rem",
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
        "& .MuiSvgIcon-root": {
          color: "white",
        },
      }}
    >
      <MenuItem value="Baba">Baba</MenuItem>
      <MenuItem value="Anne">Anne</MenuItem>
    </TextField>
  );
}
