import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SiteLogin from "./SiteLogin";
import './MainLayout.css'; // Import your CSS file
import './BackgroundVideo.css';
import animation1 from '../assets/animation1.mp4'; 
const MainLayout = () => {
  const [visible, setVisible] = useState(false);

  const toggleLogin = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
       {/* <div className="background-video">
      <video autoPlay loop muted>
          <source src={animation1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <Header headerOpen={toggleLogin} />
      {visible && (
        <div className="login-overlay">
          <SiteLogin />
        </div>
      )}
      <div className="content">
        <Outlet /> {/* Renders the component matching the current route */}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
