import React, { useState, useEffect } from 'react';
import { Menu, X, Cat } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-purple-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Cat className="h-8 w-8 text-yellow-400 mr-2" />
            <span className="font-['Audiowide'] text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
              $ELE
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#story" className="text-gray-200 hover:text-yellow-300 transition-colors">Story</a>
            <a href="#tokenomics" className="text-gray-200 hover:text-yellow-300 transition-colors">Tokenomics</a>
            <a href="#community" className="text-gray-200 hover:text-yellow-300 transition-colors">Community</a>
            <a href="https://gmgn.ai/sol/token/4AhaE5WXM5ezxrSv6UJqjcYJYvgc7wGLonmHNuC2pump" className="btn btn-primary">Buy Now</a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-200 hover:text-yellow-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#story" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-yellow-300"
            >
              Story
            </a>
            <a 
              href="#tokenomics" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-yellow-300"
            >
              Tokenomics
            </a>
            <a 
              href="#community" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-yellow-300"
            >
              Community
            </a>
            <a 
              href="#" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-yellow-300"
            >
              <span className="btn btn-primary inline-block">Buy Now</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
