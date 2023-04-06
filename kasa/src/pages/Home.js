import "../styles/home.css";
import background from "../utils/background.png";
import CardContainer from "../components/CardContainer";
//import Card from "../components/Card";
//import data from "../data.json";

const Home = () => {
  return (
    <div>
      <section>
        <div className="banner">
          <img src={background} alt="background" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </section>
      <main className="cardcontainer">
        <CardContainer />
      </main>
    </div>
  );
};

export default Home;