import React from 'react';
import { ArrowRightCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container-section relative">
        <div className="absolute top-40 right-0 -rotate-12 opacity-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="section-title glow mb-4">
              $ELE: The Cat's <br />Journey Home
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-xl">
              Join our beloved cat on its journey to find its owner. $ELE isn't just a meme coin; it's a story of hope and community.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://gmgn.ai/sol/token/4AhaE5WXM5ezxrSv6UJqjcYJYvgc7wGLonmHNuC2pump" className="btn btn-primary">
                Buy $ELE Now
              </a>
              <a href="#story" className="btn btn-outline group">
                Our Story <ArrowRightCircle className="ml-2 inline-block group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 p-6 float">
              <img 
                src="https://raw.githubusercontent.com/muske111/elecat111/main/cryingcat.jpeg"
                alt="Sad cat looking for owner" 
                className="w-full max-w-sm h-auto rounded-2xl shadow-2xl transform -rotate-3"
              />
              <div className="absolute -top-10 -right-10 w-24 h-24 coin-spin">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg">
                  <span className="font-bold text-xl text-gray-900">$ELE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
