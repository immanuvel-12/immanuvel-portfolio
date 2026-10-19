import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import cvPdf from '../assets/immanuvel-resume.pdf';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-display font-bold text-gradient cursor-pointer">
          <Link to="home" smooth={true} duration={500}>IMMANUVEL S</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to} 
              smooth={true} 
              duration={500} 
              className="text-textSecondary hover:text-primary transition-colors cursor-pointer text-sm font-medium tracking-wide uppercase"
            >
              {link.name}
            </Link>
          ))}
          <a href={cvPdf} download="immanuvel-resume.pdf" target="_blank" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium">
            Resume
          </a>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-textPrimary focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass flex flex-col items-center py-6 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to} 
              smooth={true} 
              duration={500} 
              onClick={() => setIsOpen(false)}
              className="text-textPrimary hover:text-primary transition-colors cursor-pointer text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
