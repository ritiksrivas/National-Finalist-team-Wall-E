import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import './blur.css'
// List of Indian states
const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi", // National Capital Territory
];

const StatesCard = () => {
  return (
    <Card
      // sx={{
      //   maxWidth: 600,
      //   margin: "20px auto",
      //   padding: "10px",
      //   boxShadow: "none",
      //   textAlign: "center",
      //   border: "none",

      // }}
      className="card"
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            backgroundColor: " rgb(180, 222, 180)",
            boxShadow: "0px 0px 5px rgb(0 0 0.1)",
            borderRadius:"50px",
            color:"white"
          }}
        >
          List of Indian States
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px", // Space between items
          }}
        >
          {states.map((state, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: " rgb(180, 222, 180)",
                boxShadow: "0px 0px 5px rgb(0 0 0.1)",
                borderRadius: "50px",
                padding: "5px",
                flex: "1 0 45%", // Makes each box take up to 45% of the width
                boxSizing: "border-box", // Ensures padding and border are included in the total width
                textAlign: "center",
                color: "white",
              }}
            >
              <Typography variant="body1">{state}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatesCard;
