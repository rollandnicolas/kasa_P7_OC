import "../styles/error.css";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="errorMain">
            <h1>404</h1>
            <div className="containerPError">
                <p>Oups! La page que </p>
                <p> vous demandez n'existe pas.</p>
            </div>
            <Link to={"/"}>
                <span className="linkErrorStyle">Retourner sur la page d'accueil</span>
            </Link>
        </div>
    );
};

export default Error;