import './styles.css';
import { Navigation, Hero, Skills, Projects, Contact, Footer } from '../'

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
