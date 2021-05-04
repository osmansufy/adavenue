import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import video from "../../assets/images/Ad-Avenue-1920x1080.mp4";
import bannerLogo from "../../assets/images/banner-logo.png";
import playStore from "../../assets/images/playStore.png";

const Banner = () => {
  const [showLogo, setShowLogo] = useState(true);
  const toggleLogo = () => {
    if (showLogo) {
      setTimeout(() => {
        setShowLogo(false);
      }, [9000]);
    } else {
      setTimeout(() => {
        setShowLogo(true);
      }, [3000]);
    }
  };

  useEffect(() => {
    toggleLogo();
  }, [showLogo]);
  return (
    <Container fluid className="bg-dark">
      <section className="bannerWrapper">
        <div className="video-wrapper">
          <video className="videoTag" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="banner-container align-items-center d-flex flex-column">
          <div className="writing-content">
            <h3>Advertise On CAR,BUS,CNG,AIRCRAFT</h3>
            <p>Geo-targeted |­­ Memorable | Affordable ­­ ­­­­­</p>
          </div>
          {showLogo ? (
            <img className="bannerLogo my-4" src={bannerLogo} alt="" />
          ) : (
            ""
          )}

          <img className="playStore" src={playStore} alt="" />
        </div>
      </section>
    </Container>
  );
};

export default Banner;
