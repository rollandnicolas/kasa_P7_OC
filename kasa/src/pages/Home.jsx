import "../styles/home.css";
import background from "../utils/background.png";
import CardContainer from "../components/CardContainer";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Banner image={background} title="Chez <span className='break-word'>vous,</span><span className='break-word'>partout et ailleurs.</span>" />
      <CardContainer />
    </div >
  );
};

export default Home;