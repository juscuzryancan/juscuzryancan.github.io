import './styles.css';
import { Navigation, Hero } from '../'
import Footer from '../Footer';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
