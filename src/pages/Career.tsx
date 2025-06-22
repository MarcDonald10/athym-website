import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  TrendingUp, 
  Coffee, 
  MapPin, 
  Clock, 
  Send,
  Star,
  Award,
  Target,
  Lightbulb
} from 'lucide-react';

const Career = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    cv: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Évolution rapide',
      description: 'Opportunités de croissance et de montée en compétences'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Équipe passionnée',
      description: 'Collaborez avec des experts motivés et bienveillants'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Projets innovants',
      description: 'Travaillez sur des technologies de pointe'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Work-life balance',
      description: 'Télétravail flexible et congés généreux'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Ambiance startup',
      description: 'Environnement décontracté et convivial'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Formation continue',
      description: 'Budget formation et participation aux conférences'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah L.',
      role: 'Ingénieure Innovation',
      message: 'Athyms m\'a permis de développer mes compétences techniques tout en travaillant sur des projets passionnants. L\'équipe est fantastique !',
      rating: 5,
      avatar: 'SL'
    },
    {
      name: 'Thomas R.',
      role: 'Consultant Senior',
      message: 'La diversité des projets et l\'autonomie accordée font d\'Athyms un environnement de travail idéal pour évoluer.',
      rating: 5,
      avatar: 'TR'
    },
    {
      name: 'Marie D.',
      role: 'Chef de Projet',
      message: 'Une entreprise où l\'humain est au centre. Management bienveillant et vraie reconnaissance du travail accompli.',
      rating: 5,
      avatar: 'MD'
    }
  ];

  const openPositions = [
    {
      title: 'Ingénieur(e) R&D Innovation',
      location: 'Grenoble',
      type: 'CDI',
      experience: '3-5 ans',
      description: 'Recherche et développement de solutions innovantes pour nos clients industriels.'
    },
    {
      title: 'Consultant(e) Transformation Digitale',
      location: 'Grenoble / Remote',
      type: 'CDI',
      experience: '2-4 ans',
      description: 'Accompagnement des entreprises dans leur transformation numérique.'
    },
    {
      title: 'Data Scientist',
      location: 'Grenoble',
      type: 'CDI',
      experience: '4-6 ans',
      description: 'Analyse de données complexes et développement d\'algorithmes d\'IA.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      cv: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Candidature envoyée avec succès ! Nous vous recontacterons bientôt.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      cv: null
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary-50 text-white overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Envie de butiner des idées géniales ?
            </h1>
            <p className="text-xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Rejoignez une équipe passionnée qui transforme l'innovation en réalité. 
              Chez Athyms, votre talent trouve sa place dans des projets qui comptent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#positions" className="btn-accent text-lg px-10 py-4">
                Voir les offres
              </a>
              <a href="#testimonials" className="btn-secondary text-lg px-10 py-4">
                Témoignages collaborateurs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Pourquoi nous rejoindre ?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Découvrez les avantages qui font d'Athyms Solutions un employeur de choix
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="card p-8 text-center group animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="testimonials" className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Témoignages Collaborateurs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Découvrez ce que nos équipes pensent de leur expérience chez Athyms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="card p-8 animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-neutral-700 mb-6 italic leading-relaxed">
                  "{testimonial.message}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">{testimonial.name}</div>
                    <div className="text-neutral-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offres d'emploi */}
      <section id="positions" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Postes Ouverts
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Explorez nos opportunités actuelles et trouvez le poste qui vous correspond
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <div 
                key={index}
                className="card p-8 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Target className="w-4 h-4 mr-1" />
                        {position.experience}
                      </div>
                    </div>
                  </div>
                  <button className="btn-primary mt-4 md:mt-0">
                    Postuler
                  </button>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  {position.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-neutral-600 mb-6">
              Vous ne trouvez pas le poste qui vous correspond ? 
            </p>
            <p className="text-neutral-600 mb-8">
              Envoyez-nous une candidature spontanée, nous sommes toujours à la recherche de talents !
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire de candidature spontanée */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                Candidature Spontanée
              </h2>
              <p className="text-xl text-neutral-600">
                Partagez-nous votre profil et vos motivations
              </p>
            </div>

            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cv" className="block text-sm font-medium text-neutral-700 mb-2">
                    CV (PDF, DOC, DOCX - Max 5MB)
                  </label>
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message de motivation *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Parlez-nous de vous, de vos motivations et de ce que vous pourriez apporter à Athyms Solutions..."
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 resize-vertical"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer ma candidature
                    </>
                  )}
                </button>

                <p className="text-sm text-neutral-500 text-center">
                  * Champs obligatoires. Vos données sont traitées confidentiellement selon notre politique de confidentialité.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;