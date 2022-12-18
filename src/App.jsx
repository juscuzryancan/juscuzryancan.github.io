import { Navigation, Hero, Skills, Projects, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import run from "./assets/running.JPG";

const App = () => {
  return (
    <div className="bg-primary">
      <Navigation />
      <Hero />
      <Skills />
        <div className="flex justify-center">
          <img className="w-1/3 shadow-sm rounded" src={run} alt="runing"/>
        </div>
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
