import React from 'react';
import { Twitter, Send as Telegram, Disc as Discord, Github } from 'lucide-react';


const Community: React.FC = () => {
  return (
    <section id="community" className="py-16 md:py-24 bg-indigo-950/50">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title">Join Our Community</h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Become part of Ele's journey and connect with fellow believers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center place-items-center">
          <SocialCard 
            icon={<Twitter className="h-10 w-10" />}
            name="Twitter"
            description="Follow for updates"
            link="https://x.com/ele_lost"
            bgColor="bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20"
            textColor="text-[#1DA1F2]"
          />
          
          <SocialCard 
            icon={<Telegram className="h-10 w-10" />}
            name="Telegram"
            description="Join our community"
            link="#"
            bgColor="bg-[#0088cc]/10 hover:bg-[#0088cc]/20"
            textColor="text-[#0088cc]"
          />
          
        </div>
        
        <div className="mt-20">
          <div className="bg-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-800/50 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-yellow-300">
              Roadmap
            </h3>
            
            <div className="space-y-6">
              <EventCard
                title="$ELE The Birth of the Meme"
                description="Idea sparks during a late-night meme binge"
              />
              
              <EventCard
                title="The Meme Awakens"
                description="Token smart contract deployed and Fair Launch"
              />
              <EventCard
                title="Viral Velocity"
                description="CEX listing."
              />
              
              <EventCard
                title="Viral Velocity"
                description="First donation to cat shelters from our charity fund."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SocialCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  link: string;
  bgColor: string;
  textColor: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ 
  icon, 
  name, 
  description, 
  link, 
  bgColor,
  textColor
}) => {
  return (
    <a 
      href={link} 
      className={`${bgColor} ${textColor} p-6 rounded-xl border border-indigo-800/50 hover:border-indigo-700/80 transition-all flex flex-col items-center text-center transform hover:-translate-y-1 hover:shadow-lg`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-indigo-100">{description}</p>
    </a>
  );
};

interface EventCardProps {
  date: string;
  title: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ date, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center p-4 rounded-lg bg-indigo-800/20 hover:bg-indigo-800/30 transition-colors">
      <div className="md:w-32 mb-3 md:mb-0">
        <span className="inline-block px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-sm font-medium">
          {date}
        </span>
      </div>
      <div className="md:flex-1 md:px-4">
        <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
        <p className="text-indigo-100">{description}</p>
      </div>
      <div className="mt-3 md:mt-0 md:ml-4">
        <button className="px-4 py-2 bg-indigo-700 hover:bg-indigo-600 rounded-lg transition-colors text-sm font-medium">
          Remind Me
        </button>
      </div>
    </div>
  );
};

export default Community;
