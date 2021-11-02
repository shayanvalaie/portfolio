import "./App.css";


import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            "color": {
              "value": "#1B1C1C"
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": {
                "value": "#1B1C1C"
              },
              "opacity": 0.4,
              "width": 1
            },
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Portfolio />
      <Contact />




    </>
  );
}

export default App;
