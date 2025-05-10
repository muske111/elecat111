import React, { useState, useEffect } from 'react';
import { DollarSign, Users, Lock, Flame } from 'lucide-react';

const Tokenomics: React.FC = () => {
  const [animateChart, setAnimateChart] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateChart(true);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <section id="tokenomics" className="py-16 md:py-24">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title">Tokenomics</h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            $ELE is built on transparency and community focus
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-indigo-900/50 backdrop-blur-sm p-8 rounded-xl border border-indigo-800/50 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">Token Distribution</h3>
              
              <div className="space-y-6">
                <TokenStat
                  title="Community Pool"
                  percentage={70}
                  description="70% of tokens are distributed to the community"
                  color="from-blue-400 to-indigo-500"
                  delay={0.1}
                  isAnimated={animateChart}
                />
                
                <TokenStat
                  title="Liquidity Pool"
                  percentage={20}
                  description="20% of tokens are locked in liquidity"
                  color="from-purple-400 to-indigo-600"
                  delay={0.3}
                  isAnimated={animateChart}
                />
                
                <TokenStat
                  title="Charity Fund"
                  percentage={5}
                  description="5% to help real cats find homes"
                  color="from-amber-400 to-yellow-500"
                  delay={0.7}
                  isAnimated={animateChart}
                />
              </div>
            </div>
            
            <div className="bg-yellow-400/10 p-4 rounded-lg">
              <p className="text-center text-sm font-medium text-yellow-300">
                Total Supply: 100,000,000 $ELE
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<DollarSign className="h-8 w-8 text-yellow-400" />}
              title="2% Redistribution"
              description="2% of all transactions are redistributed to holders"
            />
            
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-yellow-400" />}
              title="Community Driven"
              description="Governance decisions made by token holders"
            />
            
            <FeatureCard 
              icon={<Lock className="h-8 w-8 text-yellow-400" />}
              title="Liquidity Locked"
              description="Liquidity locked for 1 year to ensure stability"
            />
            
            <FeatureCard 
              icon={<Flame className="h-8 w-8 text-yellow-400" />}
              title="1% Burn Mechanism"
              description="1% of tokens from each transaction are burned forever"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface TokenStatProps {
  title: string;
  percentage: number;
  description: string;
  color: string;
  delay: number;
  isAnimated: boolean;
}

const TokenStat: React.FC<TokenStatProps> = ({ 
  title, 
  percentage, 
  description, 
  color,
  delay,
  isAnimated
}) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{title}</span>
        <span className="font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-4 overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`} 
          style={{ 
            width: isAnimated ? `${percentage}%` : '0%',
            transitionDelay: `${delay}s`
          }}
        ></div>
      </div>
      <p className="text-sm text-indigo-200 mt-1">{description}</p>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-indigo-900/30 p-6 rounded-xl border border-indigo-800/50 hover:border-yellow-500/50 transition-all hover:shadow-lg hover:shadow-yellow-500/10">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-yellow-300">{title}</h3>
      <p className="text-indigo-100">{description}</p>
    </div>
  );
};

export default Tokenomics;
