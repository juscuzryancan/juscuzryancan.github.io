import './styles.css';
import { Navigation, Hero, Skills, Projects, Contact } from '../'
import Footer from '../Footer';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
