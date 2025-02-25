import React from "react";
import { Box, Typography } from "@mui/material";
import maleIcon from "../../assets/icons-for-gender/profile_3135715.png";
import femaleIcon from "../../assets/icons-for-gender/image.png";
const EmployeeCard = ({ image, name, position, email, gender }) => {
  const defaultImage = gender === "female" ? femaleIcon : maleIcon;

  return (
    <Box
      sx={{
        width: "23%",
        minWidth: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: 3,
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      <Box
        component="img"
        src={image || defaultImage}
        alt={name}
        sx={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          marginBottom: "20px",
        }}
      />
      <Typography variant="h6" fontWeight="bold">
        {name || "Employee Name"}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {position || "Employee Position"}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {email || "email@example.com"}
      </Typography>
    </Box>
  );
};

export default EmployeeCard;
