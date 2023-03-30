import Nav from "./components/Nav";
import Routes from "./routes";
import Footer from "./components/Footer";

import "./App.css";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
