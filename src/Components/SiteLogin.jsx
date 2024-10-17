import React, { useState } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/authSlice";
const SiteLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state=> state.auth);

  const [input, setInput] = useState({
    adhar: "",
    password: "",
  });

  const changeHandler = (e) => {
    // console.log(input);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    // This prevents the form from reloading the page
    try {
      const res = await axios.post(`http://localhost:8080/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(res);
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        console.log(res.data.message);
        navigate("/");
        console.log(user);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: 2,
        opacity:0.5,
      }}
    >
      <Box
        sx={{
          width: 400,
          padding: 4,
          backgroundColor: "white",
          borderRadius: "50px",
          boxShadow: 3,
         
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Login
        </Typography>
        {/* The actual form with onSubmit */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2,color:"black" }}
        >
          <TextField
            variant="outlined"
            label="Addhar No"
            name="adhar"
            value={input.adhar}
            onChange={changeHandler}
            fullWidth
            required
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            value={input.password}
            onChange={changeHandler}
            fullWidth
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
            fullWidth
          >
            Login
          </Button>
        </Box>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ mt: 2 }}
        >
          Don’t have an account?{" "}
          <Button onClick={() => navigate("/signin")}>Sign up</Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default SiteLogin;
