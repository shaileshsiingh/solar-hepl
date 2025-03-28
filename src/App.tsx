import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import KusumYojana from './pages/KusumYojana';
import OurProjects from './pages/OurProjects';
import RescoSolarModal from './pages/RescoSolarModal';
import DocumentChecklist from './pages/DocumentChecklist';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/kusum-yojana" element={<KusumYojana />} />
            <Route path="/projects" element={<OurProjects />} />
            <Route path="/resco-solar" element={<RescoSolarModal />} />
            <Route path="/document-checklist" element={<DocumentChecklist />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;