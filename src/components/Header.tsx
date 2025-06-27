import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronUp } from 'lucide-react';
import logo from '../assets/logos/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Àpropos', path: '/a-propos' },
    { name: 'Expertises', path: '/expertises' },
    { name: 'Actualités', path: '/news' },
    // { name: 'Carrière', path: '/carriere' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              aria-label="Athyms Solutions - Accueil"
            >
              <div>
                <img
                  src={logo}
                  alt="logo"
                  loading="lazy"
                  className="w-[150px] sm:w-[250px]" // Taille responsive : 150px sur mobile, 250px sur écrans plus grands
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-all duration-300 hover:text-primary-50 relative group ${
                    location.pathname === item.path
                      ? 'text-primary-50'
                      : isScrolled
                      ? 'text-neutral-700 hover:text-primary-50'
                      : 'text-neutral-700 hover:text-primary-50'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary-50 transition-all duration-300 group-hover:w-full ${
                      location.pathname === item.path ? 'w-full' : ''
                    }`}
                  ></span>
                </Link>
              ))}
              <Link to="/carriere" className="ml-4 btn-secondary inline-flex items-center">
                Nous rejoindre
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-black hover:bg-neutral-100' : 'text-black hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="py-4 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-xl">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-6 py-3 font-medium transition-colors duration-300 hover:bg-neutral-50 hover:text-primary-50 ${
                    location.pathname === item.path ? 'text-white bg-primary-50' : 'text-neutral-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-3">
                <Link to="/carriere" className="btn-secondary inline-flex w-full text-center block">
                  Nous rejoindre
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;