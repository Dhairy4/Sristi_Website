import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SristiHeroSlider from './components/ui/SristiHeroSlider';

// Placeholder Pages for Task 1
const Home = () => (
  <div>
    <SristiHeroSlider />
  </div>
);
const AboutUs = () => <div className="min-h-[70vh] flex items-center justify-center text-4xl font-bold text-gray-800">About Us Page</div>;
const Incubator = () => <div className="min-h-[70vh] flex items-center justify-center text-4xl font-bold text-gray-800">Incubator Page</div>;
const Contact = () => <div className="min-h-[70vh] flex items-center justify-center text-4xl font-bold text-gray-800">Contact Page</div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/incubator" element={<Incubator />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
