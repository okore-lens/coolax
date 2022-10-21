import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Coverage from "./components/Coverage";
import Slideshow from "./components/Slideshow";
import Packages from "./components/Packages";
import Help from "./components/Help";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Hero />
      <Brands />
      <div className="column">
        <Coverage />
      </div>
      <Slideshow />
      <div className="column">
        <Packages />
        <Help />
      </div>
      <Footer />
    </div>
  );
}

export default App;
