import "../styles/footer.css";
import logoWhite from "../utils/logoWhite.png";

const Footer = () => {
    return (
        <footer className="footerStyle">
            <div>
                <img className="logoFooterStyle" src={logoWhite} alt="logo kasa blanc" />
            </div>
            <p className="pFooterStyle">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;