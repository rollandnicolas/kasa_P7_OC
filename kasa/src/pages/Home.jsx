import "../styles/home.css";
import background from "../utils/background.png";
import CardContainer from "../components/CardContainer";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <div className="bannerHomeStyle">
        <Banner image={background} title="Chez vous, partout et ailleurs." />
      </div>
      <CardContainer />
    </div >
  );
};

export default Home;


