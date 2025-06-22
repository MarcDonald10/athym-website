// src/components/home/Hero.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

// Import images (recommended for modern React projects)
import industrie1 from '../../assets/images/industrie1.jpg';
import inove1 from '../../assets/images/inove1.jpg';
import it1 from '../../assets/images/it-1.jpg';

// Array of imported images
const backgroundImages = [industrie1, inove1, it1];

interface HeroProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = ({ isVisible, setIsVisible }) => {
  useEffect(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary-900 overflow-hidden">
      {/* Background Images with Sliding Animation */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center animate-slide"
            style={{
              backgroundImage: `url(${image})`,
              opacity: 0.1, // Reduced opacity
              filter: 'hue-rotate(180deg)', // Blue tint
              animationDelay: `${index * 3}s`, // Staggered animation
              zIndex: 1, // Below content but above other background elements
            }}
          ></div>
        ))}
        {/* Existing Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-accent-400/20 rounded-full animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary-400/30 rounded-full animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Athyms Solutions
            <span className="block text-3xl md:text-4xl font-normal text-accent-300 mt-4">
              Accélérateur d'innovation industrielle
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            De la veille technologique à l’industrialisation : un accompagnement sur-mesure, agile et
            réactif.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/contact" className="btn-primary text-lg px-10 py-4">
              Nous contacter
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
            <Link to="/a-propos" className="btn-secondary text-lg px-10 py-4">
              En savoir plus
            </Link>
          </div>
          <div className="animate-bounce-subtle">
            <ChevronDown className="w-8 h-8 mx-auto text-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;