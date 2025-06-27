import React from 'react';
import { Clock, Users } from 'lucide-react';

const ContactHero: React.FC = () => {
  return (
    <section className="section-padding bg-primary-50 from-primary-50 to-secondary-50">
      <div className="container-custom text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Un projet en tête ?
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Parlons-en. Notre équipe d'experts est là pour comprendre vos enjeux 
            et vous accompagner dans la concrétisation de vos ambitions.
          </p>
          {/* <div className="flex items-center justify-center space-x-8 text-sm text-white">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Réponse sous 24h
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Consultation gratuite
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;