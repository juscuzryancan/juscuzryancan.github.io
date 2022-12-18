import { Navigation, Hero, Skills, Projects, Footer } from "./components";
import run from "./assets/running.JPG";

const App = () => {
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
    </div>
  );
};

export default App;
