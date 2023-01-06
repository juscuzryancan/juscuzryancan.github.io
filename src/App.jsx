import { Navigation, Hero, Skills, Projects, Footer } from "./components";
import run from "./assets/running.JPG";
import placeholder from "./assets/placeholder.png";
import minesweeper from "./assets/minesweeper.png";
import strangersThings from "./assets/strangers_things.png";
import fitnessTracker from "./assets/fitness_tracker.png";
import virtualTraders from "./assets/virtual_traders.png";
import Stories from "react-insta-stories";

const App = () => {

  const images = [
    {url: placeholder}, 
    {url: minesweeper}
  ];

  return (
    <div className="bg-primary">
      <Navigation />
      <Hero />
      <Skills />
        <div className="flex justify-center">
          <img className="m-4 p-4 rounded
          sm:w-1/3" src={run} alt="runing"/>
        </div>
      <Projects />
      <Footer />
      <Stories 
        loop
        defaultInterval={3000}
        stories={images}/>
    </div>
  );
};

export default App;
