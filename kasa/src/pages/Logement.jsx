import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/logement.css"

import data from "../data/data.json";

import background from "../utils/background.png";

//import Carousel from "../components/Carousel"
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Host from "../components/Host";


const Logement = () => {
    // console.log(useParams())
    const { LogementId } = useParams();
    //  console.log(LogementId)
    const logmt = data.find((logmt) => logmt.id === LogementId);
    //console.log(logmt)
    const { title, location, rating, host, description, equipments, pictures } = logmt;

    //console.log(description);
    return (

        <div>
            <div className="carouselStyle">
                <img src={background} alt="background" />
            </div>
            
            <div className="">
                <div className="">
                    <h1>{title}</h1>
                    <p>{location}</p>
                    <div></div>
                </div>

                <div className="hostRatingContainerStyle">
                    <Rating rating={rating} />
                    <Host host={host} />
                </div>
            </div>

            <div className="collapseLogementStyle">
                <Collapse className="colOne" title="Description" description={description} />
                <Collapse className="colTwo" title="Équipement" description={equipments} />
            </div>
        </div>
    )
};

export default Logement;