import './styles.css';
import { Navigation, Hero, Skills, Projects, Contact, Footer } from '../'

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
      {/* <Footer /> */}
    </div>
  );
}

export default App;