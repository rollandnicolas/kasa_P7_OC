import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import data from "../data/data.json";

//import Carousel from "../components/Carousel"
import Collapse from "../components/Collapse";
import Nav from "../components/Nav";

/*const Logement = () => {
    //const { idLog } = useParams();
    console.log(useParams())
   


    return Logement(
        <div className="FicheLogement">
            <div>Bonjour</div>
            
        </div>
    )
};*/


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
            <h1>{title}</h1>
            <h2>{location}</h2>
            <div >
                    <Collapse title="Description" description={description} />
                    <Collapse title="Équipement" description={equipments} />
                </div>

        </div>


    )
};

export default Logement;