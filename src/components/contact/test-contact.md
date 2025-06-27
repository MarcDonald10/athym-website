import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, Clock, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Message envoyé avec succès ! Nous vous recontacterons rapidement.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adresse',
      details: ['38000 Grenoble', 'France'],
      link: 'https://maps.google.com/?q=Grenoble,France'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['contact@athyms-solutions.fr'],
      link: 'mailto:contact@athyms-solutions.fr'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      details: ['+33 758 814 737'],
      link: 'tel:0758814737'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horaires',
      details: ['Lun - Ven : 9h - 18h', 'Sam - Dim : Fermé'],
      link: null
    }
  ];

  const subjects = [
    'Demande d\'information',
    'Nouveau projet',
    'Partenariat',
    'Support technique',
    'Autre'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
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
            <div className="flex items-center justify-center space-x-8 text-sm text-white">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Réponse sous 24h
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Consultation gratuite
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                Nos Coordonnées
              </h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-50 from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex}>
                          {info.link ? (
                            <a 
                              href={info.link}
                              target={info.link.startsWith('http') ? '_blank' : '_self'}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-neutral-600 hover:text-primary-600 transition-colors duration-300"
                            >
                              {detail}
                            </a>
                          ) : (
                            <span className="text-neutral-600">{detail}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Placeholder */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  Nous trouver
                </h3>
                <div className="bg-neutral-100 rounded-xl p-8 text-center">
                  <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <p className="text-lg text-neutral-700 mb-4">
                    Athyms Solutions
                  </p>
                  <p className="text-neutral-600 mb-6">
                    Basés à Grenoble, au cœur de l'écosystème innovation des Alpes
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Grenoble,France"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="card p-8">
                <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                  Contactez-nous
                </h2>

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
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Décrivez votre projet, vos besoins ou vos questions..."
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
                        
                        Envoyer le message
                      </>
                    )}
                  </button>

                  <p className="text-sm text-neutral-500 text-center">
                    * Champs obligatoires. Nous nous engageons à répondre sous 24h.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Section */}
      {/* <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Combien de temps dure un projet type ?
              </h3>
              <p className="text-neutral-600">
                La durée varie selon la complexité, de 2-3 mois pour un prototype 
                à 12-18 mois pour une industrialisation complète.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Travaillez-vous avec des startups ?
              </h3>
              <p className="text-neutral-600">
                Oui, nous accompagnons des entreprises de toutes tailles, 
                des startups innovantes aux grands groupes industriels.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Proposez-vous des financements ?
              </h3>
              <p className="text-neutral-600">
                Nous vous aidons à identifier et obtenir les financements 
                publics et privés adaptés à votre projet.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Intervenez-vous à l'international ?
              </h3>
              <p className="text-neutral-600">
                Notre expertise s'étend en Europe et nous avons des partenaires 
                dans plusieurs pays pour vos projets internationaux.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;