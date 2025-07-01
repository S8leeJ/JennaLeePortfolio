import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="modern-card px-4 sm:px-8 py-4 sm:py-6 mb-8 flex justify-between items-center relative">
      {/* Logo */}
      <Link to="/" className="group" onClick={closeMenu}>
        <h1 className="font-outfit text-xl sm:text-2xl font-bold text-blue-300 group-hover:scale-105 transition-transform duration-300">
          Jenna Lee
        </h1>
        <p className="text-xs text-slate-400 font-medium tracking-wide">Software Engineer</p>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link 
          to="/" 
          className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-blue-300 ${
            isActive('/') ? 'text-blue-300 border-b-2 border-blue-300' : 'text-slate-300'
          }`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-blue-300 ${
            isActive('/about') ? 'text-blue-300 border-b-2 border-blue-300' : 'text-slate-300'
          }`}
        >
          About
        </Link>
        <Link 
          to="/projects" 
          className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-blue-300 ${
            isActive('/projects') ? 'text-blue-300 border-b-2 border-blue-300' : 'text-slate-300'
          }`}
        >
          Projects
        </Link>
        <Link 
          to="/contact" 
          className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-blue-300 ${
            isActive('/contact') ? 'text-blue-300 border-b-2 border-blue-300' : 'text-slate-300'
          }`}
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg hover:bg-white/40 transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <FaTimes className="text-xl text-slate-300 hover:text-blue-300 transition-colors" />
        ) : (
          <FaBars className="text-xl text-slate-300 hover:text-blue-300 transition-colors" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 modern-card p-4 z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-base font-medium tracking-wide transition-all duration-300 hover:text-blue-300 py-2 px-3 rounded-lg hover:bg-white/5 ${
                isActive('/') ? 'text-blue-300 bg-blue-500/10' : 'text-slate-300'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-base font-medium tracking-wide transition-all duration-300 hover:text-blue-300 py-2 px-3 rounded-lg hover:bg-white/5 ${
                isActive('/about') ? 'text-blue-300 bg-blue-500/10' : 'text-slate-300'
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`text-base font-medium tracking-wide transition-all duration-300 hover:text-blue-300 py-2 px-3 rounded-lg hover:bg-white/5 ${
                isActive('/projects') ? 'text-blue-300 bg-blue-500/10' : 'text-slate-300'
              }`}
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`text-base font-medium tracking-wide transition-all duration-300 hover:text-blue-300 py-2 px-3 rounded-lg hover:bg-white/5 ${
                isActive('/contact') ? 'text-blue-300 bg-blue-500/10' : 'text-slate-300'
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
