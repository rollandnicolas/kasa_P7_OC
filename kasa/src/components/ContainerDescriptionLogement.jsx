import Tag from "./Tag";
import Host from "./Host";
import Collapse from "./Collapse";

import "../styles/containerDescriptionLogement.css"
import Rating from "./Rating";

function ContainerDescriptionLogement ({
    title, description, host, rating, location, equipments, tags,
}) {
    return (
        <div className="info">
            <div className="info1"> 
                <div className="card1">
                    <h1 className="title">{title}</h1>
                    <p className="locate">{location}</p>
                    <Tag tags={tags} />
                </div>
                <div className="card2">
                    <Host host = {host} />
                    <Rating rate = {rating} />
                </div>
            </div>
            <div className="descEquip">
                <section className="desc">
                    <Collapse 
                        title = {"Description"} 
                        content = {description} />
                </section>
                <section className="equip">
                    <Collapse 
                        title = {"Equipements"}
                        content = {equipments} />
                </section>
            </div>
        </div>
    )
}

export default ContainerDescriptionLogement ;