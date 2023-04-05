import "../styles/footer.css";
import logoWhite from "../utils/logoWhite.png";

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={logoWhite} alt="logo kasa blanc" />
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;