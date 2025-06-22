import React from 'react';
import { Building2, Zap, Cog, Smartphone, ArrowRight, ExternalLink, Linkedin } from 'lucide-react';

const Expertise = () => {
  const expertises = [
    {
      id: 'construction',
      icon: <Building2 className="w-12 h-12" />,
      title: 'Construction & Écologie',
      subtitle: 'Solutions durables pour le bâtiment de demain',
      description: 'Nous accompagnons les acteurs du BTP dans leur transition écologique en développant des solutions innovantes pour la construction durable.',
      color: 'from-green-500 to-emerald-600',
      features: [
        'Matériaux bio-sourcés et recyclés',
        'Optimisation énergétique des bâtiments',
        'Smart building et domotique avancée',
        'Certification environnementale (HQE, BREEAM)',
        'Économie circulaire dans la construction'
      ],
      projects: [
        'Développement d\'un béton bio-sourcé révolutionnaire',
        'Système de ventilation intelligente pour bureaux',
        'Plateforme de gestion énergétique pour écoquartiers'
      ],
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'energie',
      icon: <Zap className="w-12 h-12" />,
      title: 'Énergie & Industrie',
      subtitle: 'Innovation énergétique et optimisation industrielle',
      description: 'Expertise dans les technologies énergétiques avancées et l\'optimisation des processus industriels pour une industrie plus efficace et durable.',
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Énergies renouvelables et stockage',
        'Industrie 4.0 et IoT industriel',
        'Optimisation des processus de production',
        'Maintenance prédictive intelligente',
        'Décarbonation industrielle'
      ],
      projects: [
        'Système de stockage d\'énergie nouvelle génération',
        'Plateforme IoT pour la maintenance prédictive',
        'Optimisation énergétique d\'une usine chimique'
      ],
      image: 'https://images.pexels.com/photos/2850277/pexels-photo-2850277.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'urbanisme',
      icon: <Cog className="w-12 h-12 bg-primary-50" />,
      title: 'Urbanisme & Mobilité',
      subtitle: 'Villes intelligentes et mobilité durable',
      description: 'Conception de solutions innovantes pour les smart cities et les nouveaux modes de transport, au service d\'une mobilité plus durable et inclusive.',
      color: 'from-purple-500 to-indigo-600',
      features: [
        'Planification urbaine intelligente',
        'Mobilité multimodale et partagée',
        'Transport autonome et connecté',
        'Gestion intelligente du trafic',
        'Infrastructure numérique urbaine'
      ],
      projects: [
        'Plateforme de mobilité as a Service (MaaS)',
        'Système de gestion intelligente des feux tricolores',
        'Application de covoiturage dynamique inter-entreprises'
      ],
      image: 'https://images.pexels.com/photos/2611686/pexels-photo-2611686.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'it',
      icon: <Smartphone className="w-12 h-12" />,
      title: 'IT & Télécom',
      subtitle: 'Technologies de pointe et télécommunications',
      description: 'Développement de solutions technologiques avancées, de l\'IA à la 5G, pour accompagner la transformation digitale des entreprises.',
      color: 'from-orange-500 to-red-600',
      features: [
        'Intelligence artificielle et machine learning',
        'Technologies 5G et edge computing',
        'Blockchain et cryptographie avancée',
        'Cybersécurité et protection des données',
        'Développement d\'applications métier'
      ],
      projects: [
        'IA conversationnelle pour service client automatisé',
        'Plateforme blockchain pour traçabilité alimentaire',
        'Système de détection de fraudes en temps réel'
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const shareOnLinkedIn = (title: string) => {
    const url = window.location.href;
    const text = `Découvrez l'expertise ${title} d'Athyms Solutions`;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary-50 from-primary-50 to-secondary-50">
        <div className="container-custom text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 text-white">
              Nos Expertises
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed text-white">
              Chez Athyms solution, chaque projet est une aventure unique où l'innovation rime avec performance. 
              Découvrez nos  domaines d'excellence qui façonnent l'industrie de demain.
            </p>
          </div>
        </div>
      </section>

      {/* Expertises Sections */}
      {expertises.map((expertise, index) => (
        <section 
          key={expertise.id} 
          id={expertise.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
            }`}>
              {/* Content */}
              <div className={`animate-slide-up ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-primary-50 ${expertise.color} rounded-2xl flex items-center justify-center text-white mr-6`}>
                    {expertise.icon}
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-neutral-900">{expertise.title}</h2>
                    <p className="text-xl text-neutral-600 mt-2">{expertise.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  {expertise.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">Nos compétences clés</h3>
                  <ul className="space-y-3">
                    {expertise.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects */}
                {/* <div className="mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">Projets récents</h3>
                  <div className="space-y-3">
                    {expertise.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">{project}</span>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* Share Button */}
                <button
                  onClick={() => shareOnLinkedIn(expertise.title)}
                  className="btn-secondary inline-flex items-center mb-4"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Partager sur LinkedIn
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Image */}
              <div className={`animate-slide-up ${index % 2 === 0 ? '' : 'lg:col-start-1'}`} style={{animationDelay: '0.2s'}}>
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={expertise.image} 
                      alt={expertise.title}
                      className="w-full h-96 object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${expertise.color} opacity-20 rounded-2xl pointer-events-none`}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-primary-50 from-primary-600 to-secondary-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Une expertise qui vous ressemble ?
          </h2>
          <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
            Chaque projet est unique et mérite une approche sur-mesure. 
            Discutons de vos défis et découvrons ensemble les solutions les plus adaptées.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="btn-accent text-lg px-10 py-4">
              Démarrer un projet
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </a>
            <a href="/a-propos" className="btn-secondary text-lg px-10 py-4">
              En savoir plus sur nous
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;