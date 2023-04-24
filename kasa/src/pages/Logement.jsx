import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/logement.css"

import data from "../data/data.json";

import background from "../utils/background.png";

//import Carousel from "../components/Carousel"
//import ContainerDescriptionLogement from "../components/ContainerDescriptionLogement";
import Tag from "../components/Tag"
import Rating from "../components/Rating";
import Host from "../components/Host";
import Collapse from "../components/Collapse";

import "../styles/logement.css"


const Logement = () => {
    const { LogementId } = useParams();
    const logmt = data.find((logmt) => logmt.id === LogementId);
    const { title, location, rating, host, description, equipments, pictures, tags } = logmt;

    return (

        <div>
            <div className="carouselStyle">
                <img src={background} alt="background" />
            </div>
            <div className="infoLogement">
                <div className="infoParts1and2">
                    <div className="infoPart1">
                        <h1 className="title">{title}</h1>
                        <p className="location">{location}</p>
                        <Tag tags={tags} />
                    </div>

                    <div className="infoPart2">
                        <Host host={host} />
                        <Rating rating={rating} />
                    </div>
                </div>

                <div className="collapseLogementStyle">
                    <section className="collapseDescription">
                        <Collapse title="Description" description={description} />
                    </section>
                    <section className="collapseEquipment">
                        <Collapse title="Équipement" description={equipments} />
                    </section>
                </div>
            </div>
        </div>
    )
};

export default Logement;