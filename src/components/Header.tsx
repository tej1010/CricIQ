import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Trophy className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">CricIQ</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-primary transition-colors">About Us</Link>
          <Link to="/contact" className="text-white hover:text-primary transition-colors">Contact</Link>
          <Link 
            to="/" 
            className="bg-primary text-gray-900 hover:bg-primary/90 px-6 py-2 rounded-full font-medium transition-colors"
          >
            Play Now
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 top-16 bg-gray-900 z-40 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              <Link to="/" onClick={toggleMenu} className="text-xl text-white hover:text-primary transition-colors">Home</Link>
              <Link to="/about" onClick={toggleMenu} className="text-xl text-white hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" onClick={toggleMenu} className="text-xl text-white hover:text-primary transition-colors">Contact</Link>
              <Link 
                to="/" 
                onClick={toggleMenu}
                className="bg-primary text-gray-900 hover:bg-primary/90 px-8 py-3 rounded-full text-xl font-medium transition-colors mt-4"
              >
                Play Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;