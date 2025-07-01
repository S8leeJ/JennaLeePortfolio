import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import StarsBackground from './StarsBackground';
import CustomCursor from './CustomCursor';

export default function App() {
  return (
    <Router>
      <div className="font-inter relative min-h-screen gradient-bg text-white overflow-hidden">
        {/* Background stars */}
        <div className="absolute top-0 left-0 right-0 h-1/2 z-10">
          <StarsBackground />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-8 z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <CustomCursor />
    </Router>

  );
}
