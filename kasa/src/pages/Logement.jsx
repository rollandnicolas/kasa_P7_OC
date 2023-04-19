import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/logement.css"

import data from "../data/data.json";

import background from "../utils/background.png";

//import Carousel from "../components/Carousel"
import Collapse from "../components/Collapse";


const Logement = () => {
    // console.log(useParams())
    const { LogementId } = useParams();
    //  console.log(LogementId)
    const logmt = data.find((logmt) => logmt.id === LogementId);
    console.log(logmt)
    const { title, location, description, equipments } = logmt;

    console.log(description);
    return (

        <div>
            <div className="carouselStyle">
            
            <img src={background} alt="background" />

            </div>
        
            <div>
                <h1>{title}</h1>
                <h2>{location}</h2>
            </div>
            <div className="collapseLogementStyle">
                <Collapse title="Description" description={description} />
                <Collapse title="Équipement" description={equipments} />
            </div>

        </div>


    )
};

export default Logement;