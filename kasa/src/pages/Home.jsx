import "../styles/home.css";
import background from "../utils/background.png";
import CardContainer from "../components/CardContainer";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <section>
        <div className="banner">
          <Banner />
        </div>
      </section>
      <CardContainer />
    </div >
  );
};

export default Home;


