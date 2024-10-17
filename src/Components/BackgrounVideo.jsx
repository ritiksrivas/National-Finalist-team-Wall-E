// src/components/BackgroundVideo.jsx
import React from 'react';
import './BackgroundVideo.css'; // Import styles
import animation1 from '../assets/animation1.mp4';
const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src="animation1" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
