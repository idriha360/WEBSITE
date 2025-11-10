import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white pt-20">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <img 
        src="https://picsum.photos/seed/ricepaddy/1200/800" 
        alt="L'agriculture connectée et durable" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 p-4 max-w-2xl mx-auto fade-in-up-section">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Cultivant Ensemble l'Avenir de demain
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          AECHA
        </p>
        <button className="mt-8 px-8 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full font-semibold hover:bg-white/30 transition-all duration-300">
          Découvrir
        </button>
      </div>
    </section>
  );
};

export default Hero;