import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ServiceAreas from './components/ServiceAreas';
import Gallery from './components/Gallery';
import Disclaimer from './components/Disclaimer';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <ServiceAreas />
      <Gallery />
      <Disclaimer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
