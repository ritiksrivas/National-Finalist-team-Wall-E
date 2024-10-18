import express from "express";
import mongoose from 'mongoose';
import cors from 'cors'
import { login, logout, register, resetPassword } from "./controller/user.controller.js";
import cookieParser from "cookie-parser";
import {isAuthenticated} from './middleware/isAuthentication.js'

const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}));

const connect=async ()=>{
    try{
        await mongoose.connect('mongodb+srv://rishusrivas567:M95E99lFXdQ9TJnp@cluster0.ndsbj.mongodb.net/');
        console.log("mongodb connected successfully");
    }catch(error){
       console.log(error);
    }
} 
app.get('/',(req,res)=>{
  res.send("Hi fetch the query");
});

app.post('/register',register);
app.post('/login',login);
app.get('/logout',isAuthenticated,logout);
app.post('/reset',isAuthenticated,resetPassword);

app.listen(8080,()=>{
    connect();
    console.log("8080 is running");
});