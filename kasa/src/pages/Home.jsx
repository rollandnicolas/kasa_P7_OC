import "../styles/home.css";
import background from "../utils/background.png";
import CardContainer from "../components/CardContainer";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
        <Banner image={background} title="Chez <span>vous,</span> partout et ailleurs." />
      <CardContainer />
    </div >
  );
};

export default Home;