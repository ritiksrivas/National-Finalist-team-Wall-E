import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MainLayout from "./MainLayout"; // Layout that includes the Header
import Candidate from "./Candidate";
import App from "../App";
import Connected from "./Connected";
import SiteLogin from "./SiteLogin";
import Signin from "./Signin";
import Profile from "./Profile";

function NewApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/vote" element={<App />}/>
          <Route path='/login'element={<SiteLogin/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default NewApp;
