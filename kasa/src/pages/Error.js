import "../styles/error.css";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="error_main">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={"/"}>
                <span>Retourner sur la page d'accueil</span>
            </Link>
        </div>
    );
};

export default Error;