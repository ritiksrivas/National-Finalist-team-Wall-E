import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
// import PersonIcon from "@mui/icons-material/Person";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cartoon from "../assets/cartoon.png";
import axios from 'axios';
import { setUser } from "../redux/authSlice";

const LoginMenu = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(null);

  function menuHandleOpen(e) {
    setMenuOpen(e.currentTarget);
  }

  const logouthandler= async ()=> {
    try {
      const res=await axios.get("http://localhost:8080/logout",{withCredentials:true});
      console.log(res);
      if(res.data && res.data.success){
          dispatch(setUser(null));
          navigate("/");
          console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function openProfile() {
    navigate("/profile");
  }
  function menuHandleClose() {
    setMenuOpen(null); // Added function to close the menu
  }

  return (
    <>
      {user ? (
        <>
          <IconButton onClick={menuHandleOpen}>
            <Avatar src={cartoon} sx={{ width: "56px", height: "50px",marginLeft:"20px" }} />
          </IconButton>
          <Menu
            anchorEl={menuOpen}
            open={Boolean(menuOpen)}
            onClose={menuHandleClose}
            disableScrollLock={true}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#e5ba78",
                borderRadius: "10px",
                padding: "5px",
                marginTop: "0px",
                color: "white",
              },
            }}
          >
            <MenuItem onClick={openProfile}>
              <AccountBoxIcon sx={{ paddingRight: "9px" }} />
              Profile
            </MenuItem>
            <MenuItem onClick={logouthandler}>
              <LogoutIcon sx={{ paddingRight: "9px", paddingLeft: "2px" }} />
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <NavLink to="/login">
          <h4
            style={{
              backgroundColor: "black",
              color: "#fff",
              fontSize: "20px",
              fontWeight: "bold",
              lineHeight: "30px",
              marginLeft: "15px",
              letterSpacing: "2px",
              padding: "10px 20px", // Add padding for a button effect
              borderRadius: "25px",  // Rounded corners
              border: "2px solid black",
              display: "inline-block",
              "&:hover": {
                        backgroundColor: 'white',
                        color: 'black',
                    },
            }}
          >
            LOGIN
          </h4>
        </NavLink>
      )}
    </>
  );
};

export default LoginMenu;
