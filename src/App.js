import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import StarsBackground from './StarsBackground';
import CustomCursor from './CustomCursor';

export default function App() {
  return (
    <Router>
      <div className="font-fredoka relative min-h-screen bg-gradient-to-b from-black via-purple-1000 to-purple-700 text-white overflow-hidden">
        {/* Background stars */}
        <div className="absolute top-0 left-0 right-0 h-1/2 z-10">
          <StarsBackground />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 py-12 z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
      <CustomCursor />
    </Router>

  );
}
