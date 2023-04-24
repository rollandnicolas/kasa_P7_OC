import React from "react";

const Banner = ({title, image}) => {
return (
  <div className="banner">
    <img src={image} alt={title} className="bannerImgStyle"/>
    <div className="bannerBackStyle"></div>
    <h2 className="bannerTitleStyle">{title}</h2>
  </div>
);
}

export default Banner;

