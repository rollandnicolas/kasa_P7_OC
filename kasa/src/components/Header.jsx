import "../styles/header.css";
import { Link } from "react-router-dom";
import logo from "../utils/logo.png";

const Header = () => {
    return (
        <header className="headerStyle">
            <div>
                <Link to={"/"}>
                    <img src={logo} alt="logo kasa" className="imgNavLogoStyle" />
                </Link>
            </div>
            <nav className="headerNavStyle">
                <ul className="headerNavStyle">
                    <Link to={"/"}>
                        <li className="headerLiStyle">Accueil</li>
                    </Link>
                    <Link to={"/About"}>
                        <li className="headerLiStyle">A propos</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
