import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logos/logo-blanc.png'


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <Link 
              to="/" 
              className="flex items-center space-x-3 group mb-6"
              onClick={scrollToTop}
            >
              <img 
                src={logo} 
                alt="Athyms Solutions Logo" 
                className=" object-contain group-hover:scale-105 transition-transform duration-300"
                width={300}
                loading="lazy"/>
             
            </Link>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6 max-w-md">
              Accélérateur d'innovation industrielle. De la veille stratégique à l'industrialisation, 
              nous accompagnons vos projets les plus ambitieux.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/athyms-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn Athyms Solutions"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Navigation</h3>
            <nav className="space-y-4">
              <Link 
                to="/" 
                onClick={scrollToTop}
                className="block text-neutral-300 hover:text-primary-50 transition-colors duration-300"
              >
                Accueil
              </Link>
              <Link 
                to="/a-propos" 
                onClick={scrollToTop}
                className="block text-neutral-300 hover:text-primary-50 transition-colors duration-300"
              >
                À propos
              </Link>
              <Link 
                to="/expertises" 
                onClick={scrollToTop}
                className="block text-neutral-300 hover:text-primary-50 transition-colors duration-300"
              >
                Expertises
              </Link>
              <Link 
                to="/carriere" 
                onClick={scrollToTop}
                className="block text-neutral-300 hover:text-primary-50 transition-colors duration-300"
              >
                Carrière
              </Link>
              <Link 
                to="/contact" 
                onClick={scrollToTop}
                className="block text-neutral-300 hover:text-primary-50 transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-50 flex-shrink-0" />
                <span className="text-neutral-300">Grenoble, France</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-50 flex-shrink-0" />
                <a 
                  href="mailto:contact@athyms-solutions.fr" 
                  className="text-neutral-300 hover:text-primary-50 transition-colors duration-300"
                >
                  contact@athyms-solutions.fr
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-50 flex-shrink-0" />
                <a 
                  href="tel:+33123456789" 
                  className="text-neutral-300 hover:text-primary-50 transition-colors duration-300"
                >
                  +33 1 23 45 67 89
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-center md:text-left">
              © {currentYear} Athyms Solutions. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <button 
                // onClick={() => window.open('/mentions-legales', '_blank')}
                className="text-neutral-400 hover:text-primary-50 transition-colors duration-300"
              >
                Mentions légales
              </button>
              <button 
                // onClick={() => window.open('/politique-confidentialite', '_blank')}
                className="text-neutral-400 hover:text-primary-50 transition-colors duration-300"
              >
                Politique de confidentialité
              </button>
              {/* <button 
                onClick={() => window.open('/plan-du-site', '_blank')}
                className="text-neutral-400 hover:text-primary-50 transition-colors duration-300"
              >
                Plan du site
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Retour en haut"
      >
        <ChevronUp className="w-6 h-6 mx-auto" />
      </button>
    </footer>
  );
};

export default Footer;