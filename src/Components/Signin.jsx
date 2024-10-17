import React,{useState} from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const navigate = useNavigate();
  const [input,setInput]=useState({
    name:"",
    email:"",
    adhar:"",
    mobile:"",
    dob:"",
    password:""
  });

  function changeHandler(e) {
    console.log(input);
    setInput({...input,[e.target.name]:e.target.value});
  }
  const handleSubmit= async (e)=>{
    e.preventDefault();
    if (!input.name || !input.email || !input.adhar || !input.mobile || !input.dob || !input.password) {
      alert("Please fill out all fields.");
      return;
    }
    console.log(input);
    try {
      const res= await axios.post(`http://localhost:8080/register`,input,{
        headers:{
          "Content-Type": "application/json"
        },
        withCredentials:true
      });
      if(res.data.success){
        console.log(res.data.success);
         navigate('/');
      }

    } catch (error) {
      console.log(error.response.data.message);
    }
  }



  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: 400,
          padding: 4,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Sign Up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField variant="outlined" label="Name" name='name' value={input.name} onChange={changeHandler} fullWidth required />
          <TextField variant="outlined" label="Email" name='email' value={input.email} onChange={changeHandler}  fullWidth required />
          <TextField variant="outlined" label="Aadhar No" name='adhar' value={input.adhar} onChange={changeHandler}  fullWidth required />
          <TextField variant="outlined" label="Mobile No" name='mobile' value={input.mobile} onChange={changeHandler}  fullWidth required />
          <TextField
            variant="outlined"
            label="DOB"
            name='dob'
            value={input.dob}
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
            Sign Up
          </Button>
        </Box>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ mt: 2 }}
        >
          Already have an account?
          <Button onClick={() => navigate("/login")}>Login</Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signin;
