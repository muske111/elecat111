import React from 'react';
import { HomeIcon, MapPin, Heart } from 'lucide-react';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-16 md:py-24 bg-lime-500/30">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">The Story Behind $ELE</h2>
          <p className="text-xl text-green-900">
            A heartwarming journey of a cat finding its way back home
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <StoryCard 
            icon={<HomeIcon size={32} className="text-green-700" />}
            title="Far From Home"
            description="In a distant land, a small cat named Ele found itself separated from its loving owner. Lost and alone, Ele began a journey across challenging terrain, facing obstacles that seemed insurmountable."
          />
          
          <StoryCard 
            icon={<MapPin size={32} className="text-green-700" />}
            title="The Journey"
            description="Just like Ele's journey, our token represents resilience and determination. Each transaction brings Ele one step closer to reuniting with its owner, creating a community-driven path toward home."
          />
          
          <StoryCard 
            icon={<Heart size={32} className="text-green-700" />}
            title="Community United"
            description="The $ELE community isn't just about profits—it's about coming together to help Ele find its way home. With each holder, we build a stronger network of support for Ele's journey."
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg mb-6 max-w-2xl mx-auto text-green-900">
            With every transaction, we're writing the next chapter of Ele's story. Join us in this journey, and together we'll bring Ele home while creating value for our community.
          </p>
          <a href="#" className="btn btn-secondary">
            Join Ele's Journey
          </a>
        </div>
      </div>
    </section>
  );
};

interface StoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-lime-400/30 backdrop-blur-sm p-6 rounded-xl border border-green-600/50 hover:border-green-500/80 transition-all hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-1">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-green-800">{title}</h3>
      <p className="text-green-900">{description}</p>
    </div>
  );
};

export default Story;