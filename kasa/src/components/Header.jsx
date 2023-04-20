import "../styles/header.css";
import { Link } from "react-router-dom";
import logo from "../utils/logo.png";

const Header = () => {
    return (
        <header className="headerStyle">
            <div className="imgNavLogoStyle">
                <img src={logo} alt="logo kasa" />
            </div>
            <nav className="headerNavStyle">
                <ul>
                    <Link to={"/"}>
                        <li>Accueil</li>
                    </Link>
                    <Link to={"/About"}>
                        <li>A propos</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
