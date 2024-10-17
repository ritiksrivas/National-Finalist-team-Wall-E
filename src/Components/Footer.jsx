import React from "react";
import "./Footer.css";
import { Box, Divider } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div className="header">
        <div className="lineSpacing">
          <h1>Decentralized Voting App</h1>
          <h2>by</h2>
          <h1>
            Team <span style={{ color: "red" }}>Wall-E</span>
          </h1>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <h2>Dikshant</h2>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ width: "1px", backgroundColor: "black"}}
          />
          <h2>Gyanendra</h2>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ width: "1px", backgroundColor: "black" }}
          />
          <h2>Hritik</h2>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ width: "1px", backgroundColor: "black" }}
          />
          <h2>Garvesh</h2>
        </Box>
        
      </div>
    </>
  );
};

export default Footer;
