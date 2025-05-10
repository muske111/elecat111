import React from 'react';
import { Cat, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-950/70 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Cat className="h-8 w-8 text-yellow-400 mr-2" />
              <span className="font-['Audiowide'] text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                $ELE
              </span>
            </div>
            <p className="text-indigo-200 mb-4 max-w-md">
              $ELE is more than just a meme coin. It's a movement to help our feline friend find its way back home, one transaction at a time.
            </p>
            <div className="flex items-center text-indigo-300 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-400 fill-red-400" />
              <span>for cats everywhere</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-indigo-200 hover:text-yellow-300 transition-colors">Home</a></li>
              <li><a href="#story" className="text-indigo-200 hover:text-yellow-300 transition-colors">Story</a></li>
              <li><a href="#tokenomics" className="text-indigo-200 hover:text-yellow-300 transition-colors">Tokenomics</a></li>
              <li><a href="#community" className="text-indigo-200 hover:text-yellow-300 transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-indigo-200 hover:text-yellow-300 transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-yellow-300 transition-colors">Audit</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-yellow-300 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-yellow-300 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-indigo-900/70">
          <p className="text-center text-indigo-300 text-sm">
            &copy; {new Date().getFullYear()} $ELE Coin. All rights reserved.
          </p>
          <p className="text-center text-indigo-400/60 text-xs mt-2">
            Disclaimer: $ELE is a meme coin with no intrinsic value or financial return expectation.
            Always do your own research before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;