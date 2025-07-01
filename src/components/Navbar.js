import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="modern-card px-8 py-6 mb-8 flex justify-between items-center">
      <Link to="/" className="group">
        <h1 className="font-outfit text-2xl font-bold text-blue-100 group-hover:scale-105 transition-transform duration-300">
          Jenna Lee
        </h1>
        <p className="text-xs text-slate-400 font-medium tracking-wide">Software Engineer</p>
      </Link>
      
      <div className="flex items-center space-x-8">
        <Link 
          to="/" 
          className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-blue-300 ${
            isActive('/') ? 'text-white-300 border-b-2 border-blue-300' : 'text-slate-300'
          }`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-blue-300 ${
            isActive('/about') ? 'text-white-300 border-b-2 border-blue-300' : 'text-slate-300'
          }`}
        >
          About
        </Link>
        <Link 
          to="/projects" 
          className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-blue-300 ${
            isActive('/projects') ? 'text-white-300 border-b-2 border-blue-300' : 'text-slate-300'
          }`}
        >
          Projects
        </Link>
        <Link 
          to="/contact" 
          className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-blue-300 ${
            isActive('/contact') ? 'text-white-300 border-b-2 border-blue-300' : 'text-slate-300'
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
