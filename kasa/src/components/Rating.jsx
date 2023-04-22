import React from "react";
import "../styles/rating.css"
// style

import redstar from "../utils/redstar.png";
import greystar from "../utils/greystar.png";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="ratingStyle">
      {stars.map((star) =>
        rating >= star ? 
        (
          <img key={star.toString()} className="ratingStarStyle" src={redstar} alt="" />
        ) 
        : 
        (
          <img key={star.toString()} className="ratingStarStyle" src={greystar} alt="" />
        )
      )}
    </div>
  );
};

export default Rating;