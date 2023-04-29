import { useParams } from "react-router-dom";
import "../styles/logement.css"

import data from "../data/data.json";
import Error from "./Error";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Host from "../components/Host";
import Collapse from "../components/Collapse";

const Logement = () => {
    const { LogementId } = useParams();
    const logmt = data.find((logmt) => logmt.id === LogementId);

    if (!logmt) {
        return <Error />;
    }
    const { title, location, rating, host, description, equipments, tags } = logmt;

    return (

        <div>

            <Carousel pictures={logmt.pictures} className="carouselStyle" />

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
                        <Collapse className="collapseTextEquip" title="Équipement" description={equipments.map((equipments, index) => <span key={index}>{equipments} </span>)} />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Logement;