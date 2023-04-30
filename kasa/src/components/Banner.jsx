import React from "react";

const Banner = ({ image, text }) => {
  return (
    <div className="banner">
      <img src={image} alt="" className="bannerImg" />
      <h1 className="bannerText">Chez vous, partout et ailleurs!</h1>
    </div>
  );
};

export default Banner;




