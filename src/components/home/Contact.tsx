// src/components/home/Contact.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="section-padding bg-primary-50 from-primary-600 to-secondary-600">
      <div className="container-custom text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Un projet en tête ?
        </h2>
        <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
          Parlons de votre vision et découvrons ensemble comment la concrétiser.
          Notre équipe d'experts est là pour vous accompagner à chaque étape.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/contact" className="btn-accent text-lg px-10 py-4">
            Démarrer un projet
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </Link>
          <Link to="/expertises" className="btn-secondary text-lg px-10 py-4">
            Voir nos réalisations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;