import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  IconButton,
  CardMedia,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import cartoon from "../assets/cartoon.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import BackgroundVideo from "./BackgrounVideo";



const Profile = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [input,setInput]=useState({
     adhar:user.adhar, 
     password:"",
     npassword:""
  });
  

  const [dummy, setDummy] = useState(user);
  const [editOpen, setEditOpen] = useState(false);
  const [editData, setEditData] = useState(user);

  // Handle open and close of the dialog
  const handleEditOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  // Handle changes in the form fields
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  // Save the updated data
  // const handleSave = () => {
  //   setDummy(editData);
  //   setEditOpen(false);
  // };

  const resetPassword = async (e)=>{
    e.preventDefault();
    console.log(input);
    try {
      const res=axios.post("http://localhost:8080/reset",input,{
        headers:{
          "Content-Type":"application/json",
        },
        withCredentials:true
      });
 
      if(res.data.success){
        setEditOpen(false);
        console.log(res.data.message);
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      
      <Card
        sx={{
        //   maxWidth: 400,
          margin: "90px auto",
          padding: "15px",
          height: "75vh",
          position: "relative",
          width:"450px",
          opacity:"0.9",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor:"#4b3edbef",
          
        }}
      >
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{ color: "#333", textAlign: "center",color:"white" }}
        >
          Voter Details
        </Typography>
        <CardMedia
          component="img"
          image={cartoon}
          alt="Profile Image"
          sx={{
            height: 200,
            width: "auto",
            margin: "0 auto", // centers the image horizontally
            objectFit: "contain", // ensures the image is fully displayed
          }}
        />
        <Button
           variant="outlined"
          sx={{
            position: "absolute",
            bottom:40,
            right:120,
            height:"30px",
            width:"50%",
            fontSize:"18px",
            fontWeight:"bold",
            color:"white",
            borderColor:"white",
            borderRadius:"23px",
            "&:hover": {
              color: "#000",
            },
          }}
          onClick={handleEditOpen}
        >
         Change Password   
        </Button>
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              margin: "10px",
              color:"white",
              width: "100%",
              textAlign: "left",
              backgroundColor: "",
            }}
          >
            <strong>Name :</strong> {dummy.name}
          </Typography>
          <Typography
            variant="h5"
            sx={{ margin: "10px", color:"white", textAlign: "left" }}
          >
            <strong>D.O.B :</strong> {dummy.dob}
          </Typography>
          <Typography
            variant="h5"
            sx={{ margin: "10px", color:"white", textAlign: "left" }}
          >
            <strong>Mobile :</strong> {dummy.mobile}
          </Typography>
          <Typography
            variant="h5"
            sx={{ color:"white", textAlign: "left", margin: "10px" }}
          >
            <strong>Email:</strong> {dummy.email}
          </Typography>
          <Typography
            variant="h5"
            sx={{ color:"white", textAlign: "left", margin: "10px" }}
          >
            <strong>Aadhar No:</strong> {dummy.adhar}
          </Typography>
        </CardContent>
      </Card>

      {/* Edit Profile Dialog */}
      <Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Current Password"
            name="password"
            type="text"
            fullWidth
            value={input.password}
            onChange={handleChange}
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            margin="dense"
            label="New Password"
            name="npassword"
            fullWidth
            value={input.npassword}
            onChange={handleChange}
            sx={{ marginBottom: "15px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleEditClose}
            sx={{
              backgroundColor: "#f44336",
              color: "white",
              "&:hover": {
                backgroundColor: "#d32f2f",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={resetPassword}
            variant="contained"
            sx={{
              backgroundColor: "#4caf50",
              "&:hover": {
                backgroundColor: "#388e3c",
              },
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Profile;
