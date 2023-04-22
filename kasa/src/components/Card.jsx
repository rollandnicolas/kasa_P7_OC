import "../styles/card.css"
import { Link } from 'react-router-dom'

export default function Card({ id, title, cover }) {

	return (
			<Link to={`/logement/${id}`} className="cardStyle">
				<img src={cover} alt={title} />
				<h3>{title}</h3>
			</Link>
	)
}