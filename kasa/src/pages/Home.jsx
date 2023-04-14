import "../styles/home.css";
import background from "../utils/background.png";
import CardContainer from "../components/CardContainer";
import Herobanner from "../components/HeroBanner";

const Home = () => {
  return (
    <div>
      <section>
        <div className="banner">
          <img src={background} alt="background" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </section>
      <CardContainer />
    </div >
  );
};

export default Home;

/*
<section>
        <div className="banner">
          <img src={background} alt="background" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </section>*/