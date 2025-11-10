import React from 'react';
import { AnonymousNoiseIcon, YourVoiceIcon } from './Icons';

const CultureSection: React.FC = () => {
  return (
    <section className="bg-card p-6 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] fade-in-up-section">
      <h2 className="text-2xl font-bold text-center mb-6 text-text-dark">
        On plante une nouvelle culture
      </h2>
      <div className="flex items-center justify-center space-x-2 sm:space-x-4">
        <div className="flex-1 bg-bg-primary p-4 rounded-xl text-center">
          <p className="font-semibold text-text-light">Avant</p>
          <AnonymousNoiseIcon className="h-12 w-12 mx-auto my-3 text-text-dark" />
          <h3 className="font-bold text-text-dark">Le Bruit Anonyme</h3>
          <p className="text-sm text-text-light">Toxique, stérile, perdu</p>
        </div>
        <span className="text-xl font-bold text-text-light">VS</span>
        <div className="flex-1 bg-primary/10 p-4 rounded-xl text-center">
          <p className="font-semibold text-primary">Maintenant</p>
          <YourVoiceIcon className="h-12 w-12 mx-auto my-3 text-primary" />
          <h3 className="font-bold text-primary">Ta Voix</h3>
          <p className="text-sm text-text-light">Direct, Constructif, Action</p>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;