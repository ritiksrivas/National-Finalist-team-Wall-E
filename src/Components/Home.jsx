import React from "react";
import gyanendra from "../assets/gyanendra.jpg";
import diaspora from "../assets/diaspora.jpg";
import IndianFlag from "../assets/IndianFlag.png";
import flagColor from "../assets/flagColor.jpg";
import Image1 from "../assets/img1.jpg";
import Image2 from "../assets/img2.jpg";
import Image3 from "../assets/img3.jpg";
import Card from "./Card";
import StatesCard from "./StatesCard";
import Education from "./Education";
import About from "./About";
import './Login.css';
const Home = () => {
  return (
    <div>
      {/* <div>
        <img
          src={gyanendra}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
      </div> */}
      <div style={{ display: "flex", flexDirection: "row",justifyContent:"space-between" }}>
        <div>
          <img
            src={IndianFlag}
            style={{
              width: "100%",
              height: "838px",
              objectFit: "cover",
              filter: `drop-shadow(grey 0.5rem 0.5rem 5px)`,
            }}
          />
        </div>
        <div>
          <StatesCard />
        </div>
        </div>
        
      <div className="app-main">
        <h3>SOCIAL MEDIA</h3>
        <div className="app">
          <a href="https://www.youtube.com/watch?v=-EmQtNWd9vU&list=UUGdsgdPfwnwYF1l8YTFkknA" target="blank">
              
            <Card imageSrc={Image1} />
          </a>
          <a href="https://x.com/SpokespersonECI?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3ASpokespersonECI%7Ctwcon%5Es2" target="blank">
            <Card imageSrc={Image2} />
          </a>
          <a href="https://www.facebook.com/ECI/?ref=embed_page" target="blank">
            <Card imageSrc={Image3} />
          </a>
        </div>
      </div>
      <Education/>
    </div>
  );
};

export default Home;
