// src/components/home/About.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="section-padding bg-neutral-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Section */}
          <div
            className="animate-fade-slide-up opacity-0"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
              Qui sommes-nous ?
            </h2>
            <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
              Depuis ses débuts, Athyms Solutions accompagne les entreprises à chaque étape de leur
              transformation technologique. Nous intervenons depuis la veille stratégique jusqu’à la mise en
              production, en passant par le prototypage et la préparation industrielle.

            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Nous sommes passionnés par les idées qui bousculent les standards – et surtout par leur
              réalisation concrète.
            </p>
            <Link
              to="/a-propos"
              className="btn-primary inline-flex items-center text-lg px-8 py-4 rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-lg group"
            >
              Découvrir notre histoire
              <Lightbulb className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:rotate-12" />
            </Link>
          </div>

          {/* Right Card Section */}
          <div
            className="animate-fade-slide-up opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100/80 to-secondary-100/80 backdrop-blur-lg rounded-3xl p-8 h-96 flex items-center justify-center shadow-xl transition-transform duration-500 hover:scale-[1.02] animate-parallax">
                <div className="text-center">
                  <div className="relative inline-block">
                    <Lightbulb className="w-24 h-24 text-primary-600 mx-auto mb-6 animate-pulse-glow" />
                    <div className="absolute inset-0 bg-primary-600/20 rounded-full blur-xl animate-pulse-glow" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">Innovation</h3>
                  <p className="text-primary-700 text-lg">Au cœur de tout ce que nous faisons</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;