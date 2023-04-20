import Header from "./components/Header";
import Routes from "./routes";
import Footer from "./components/Footer";

import "./App.css";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
