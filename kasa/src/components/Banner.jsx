/*import React from "react";
import "../styles/banner.css";

const Banner = ({title, image}) => {
return (
  <div className="banner">
    <img src={image} alt={title} className="bannerImgStyle"/>
    <div className="bannerBackStyle"></div>
    <h2 >{title}</h2>
  </div>
);
}

export default Banner;*/

import { useLocation } from 'react-router-dom';
import "../styles/banner.css"

function Banner() {
  const location = useLocation();

  return (
    <div className={`banner ${location.pathname === '/about' ? 'banner_about' : ''}`}>
      {location.pathname === '/' && <h1>Chez vous, partout et ailleurs!</h1>}
      {location.pathname === '/about' && <p>À propos de moi.</p>}
    </div>
  );
}

export default Banner;
