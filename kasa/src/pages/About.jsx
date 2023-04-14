import { Link } from "react-router-dom";

import "../styles/about.css";
import background from "../utils/imgBanner2.png";
import Collapse from "../components/Collapse";

const About = () => {
	return (
		<div className="errorMain">
			<div>
				<section>
					<div className="banner">
						<img src={background} alt="background" />
					</div>
				</section>


				<main>
					<Collapse
						title="Fiabilité"
						description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
					></Collapse>
					<Collapse
						title="Respect"
						description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
					></Collapse>
					<Collapse
						title="Service"
						description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
					></Collapse>
					<Collapse
						title="Sécurité"
						description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
					></Collapse>
				</main>


			</div >


		</div>
	);
};

export default About;