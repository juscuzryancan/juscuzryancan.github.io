import { Navigation, Hero, Skills, Projects, Contact, Footer } from "./components";

const App = () => {
  return (
    <div className="flex">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
