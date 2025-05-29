import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

export default function BirthDatePicker() {
  const [value, setValue] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Doğum Tarihi"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        format="DD/MM/YYYY"
        maxDate={dayjs().endOf("year")}
        slotProps={{
          textField: {
            variant: "outlined",
            sx: {
              width: "16rem",
              marginTop: "1.25rem",
              input: { color: "white" },
              label: { color: "rgba(255,255,255,0.8)" },
              "& label.Mui-focused": {
                color: "#fff",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(255,255,255,0.5)",
                },
                "&:hover fieldset": {
                  borderColor: "#fff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff",
                },
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
