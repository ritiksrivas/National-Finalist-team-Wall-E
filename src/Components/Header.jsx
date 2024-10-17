import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
} from "@mui/material";
import React from "react";
import WallE from "../assets/WallE.png";
import { NavLink } from "react-router-dom";
import LoginMenu from "./LoginMenu";
const Header = ({ headerOpen }) => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          // backgroundColor: "#8e56d2ef",
          background:"linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
          justifyContent: "space-between",
          // opacity: 0.5,
        }}
      >
        <Box>
          <img
            src={WallE}
            alt="Vote Logo"
            style={{ width: "200px", height: "100px", objectFit: "cover" }}
          />
        </Box>
        <Box sx={{display:'flex',flexDirection:"row",justifyContent:'s' }}>
          <NavLink to="/" style={{}}>
            <Button
              sx={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "1px",
                lineHeight:"80px"
              }}
            >
              Home
            </Button>
          </NavLink>
          <NavLink to="/vote">
            <Button
              sx={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "1px",
                 lineHeight:"80px"
              }}
            >
              Vote
            </Button>
          </NavLink>

          <NavLink to="/candidate">
            <Button
              sx={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "1px",
                lineHeight:"80px"
              }}
            >
              Candidates
            </Button>
          </NavLink>
          <LoginMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
