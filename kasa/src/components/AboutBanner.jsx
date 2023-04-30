import React from "react";

const AboutBanner = ({ image, text }) => {
  return (
    <div className="aboutBanner">
      <img src={image} alt="" className="aboutBannerImg" />
    </div>
  );
};

export default AboutBanner;