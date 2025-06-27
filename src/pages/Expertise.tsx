import React, { useRef } from 'react';
import { Building2, Zap, Cog, Smartphone, ArrowRight, ExternalLink, Linkedin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

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
      icon: <Cog className="w-12 h-12" />,
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

  // References for scroll detection
  const heroRef = useRef(null);
  const ctaRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false, margin: '-100px' });
  const isCtaInView = useInView(ctaRef, { once: false, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
    hover: {
      scale: 1.03,
      boxShadow: '0px 8px 24px rgba(59,130,246,0.2)',
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = [
    // Construction: Pulse with glowing border
    {
      animate: {
        scale: [1, 1.1, 1],
        borderColor: ['#10B981', '#059669', '#10B981'],
        boxShadow: [
          '0px 0px 0px rgba(16,185,129,0)',
          '0px 0px 10px rgba(16,185,129,0.4)',
          '0px 0px 0px rgba(16,185,129,0)',
        ],
        transition: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' },
      },
      hover: { scale: 1.2, transition: { duration: 0.3 } },
    },
    // Energie: Float with dynamic shadow
    {
      animate: {
        y: [0, -5, 0],
        boxShadow: [
          '0px 0px 0px rgba(0,0,0,0.2)',
          '0px 6px 12px rgba(59,130,246,0.4)',
          '0px 0px 0px rgba(0,0,0,0.2)',
        ],
        transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
      },
      hover: { y: -8, transition: { duration: 0.3 } },
    },
    // Urbanisme: Zoom with animated gradient
    {
      animate: {
        scale: [1, 1.1, 1],
        background: [
          'linear-gradient(45deg, #6B46C1, #4C1D95)',
          'linear-gradient(45deg, #4C1D95, #6B46C1)',
          'linear-gradient(45deg, #6B46C1, #4C1D95)',
        ],
        transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
      },
      hover: { scale: 1.2, transition: { duration: 0.3 } },
    },
    // IT: Bounce with rotation
    {
      animate: {
        y: [0, -4, 0],
        rotate: [0, 6, 0],
        transition: { repeat: Infinity, duration: 2.3, ease: 'easeInOut' },
      },
      hover: { scale: 1.15, rotate: 10, transition: { duration: 0.3 } },
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.2 } },
  };

  const buttonVariants = {
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        '0px 0px 0px rgba(0,0,0,0)',
        '0px 4px 12px rgba(59,130,246,0.3)',
        '0px 0px 0px rgba(0,0,0,0)',
      ],
      transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
    },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const shareOnLinkedIn = (title: string) => {
    const url = window.location.href;
    const text = `Découvrez l'expertise ${title} d'Athyms Solutions`;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary-50 from-primary-50 to-secondary-50" ref={heroRef}>
        <motion.div
          className="container-custom text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isHeroInView ? 'visible' : 'hidden'}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            variants={headerVariants}
          >
            Nos Expertises
          </motion.h1>
          <motion.p
            className="text-xl text-white mb-8 max-w-4xl mx-auto leading-relaxed"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          >
            Chez Athyms Solutions, chaque projet est une aventure unique où l'innovation rime avec performance. 
            Découvrez nos domaines d'excellence qui façonnent l'industrie de demain.
          </motion.p>
        </motion.div>
      </section>

      {/* Expertises Sections */}
      {expertises.map((expertise, index) => {
        const sectionRef = useRef(null);
        const isSectionInView = useInView(sectionRef, { once: false, margin: '-100px' });

        return (
          <section 
            key={expertise.id} 
            id={expertise.id}
            className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
            ref={sectionRef}
          >
            <motion.div
              className="container-custom"
              variants={containerVariants}
              initial="hidden"
              animate={isSectionInView ? 'visible' : 'hidden'}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
              }`}>
                {/* Content */}
                <motion.div
                  className={`relative ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  {/* Particle background effect */}
                  <motion.div
                    className="absolute inset-0 -z-10 rounded-2xl"
                    animate={{
                      background: [
                        `radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)`,
                        `radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0) 70%)`,
                        `radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)`,
                      ],
                    }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  />
                  <div className="flex items-center mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-primary-50 ${expertise.color} rounded-2xl flex items-center justify-center text-white mr-6`}
                      variants={iconVariants[index]}
                      animate="animate"
                      whileHover="hover"
                    >
                      {expertise.icon}
                    </motion.div>
                    <div>
                      <motion.h2
                        className="text-4xl font-bold text-neutral-900"
                        variants={textVariants}
                      >
                        {expertise.title}
                      </motion.h2>
                      <motion.p
                        className="text-xl text-neutral-600 mt-2"
                        variants={textVariants}
                      >
                        {expertise.subtitle}
                      </motion.p>
                    </div>
                  </div>
                  <motion.p
                    className="text-lg text-neutral-600 mb-8 leading-relaxed"
                    variants={textVariants}
                  >
                    {expertise.description}
                  </motion.p>
                  {/* Features */}
                  <motion.div className="mb-8" variants={textVariants}>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">Nos compétences clés</h3>
                    <ul className="space-y-3">
                      {expertise.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center"
                          variants={textVariants}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-primary-600 rounded-full mr-4 flex-shrink-0"
                            animate={{
                              scale: [1, 1.3, 1],
                              transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
                            }}
                          />
                          <span className="text-neutral-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  {/* Share Button */}
                  <motion.button
                    onClick={() => shareOnLinkedIn(expertise.title)}
                    className="btn-secondary inline-flex items-center mb-4"
                    variants={buttonVariants}
                    animate="animate"
                    whileHover="hover"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Partager sur LinkedIn
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.button>
                </motion.div>
                {/* Image */}
                <motion.div
                  className={`relative ${index % 2 === 0 ? '' : 'lg:col-start-1'}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
                    <motion.img
                      src={expertise.image}
                      alt={expertise.title}
                      className="w-full h-96 object-cover rounded-2xl"
                      loading="lazy"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.7 } }}
                    />
                  </div>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-t ${expertise.color} opacity-20 rounded-2xl pointer-events-none`}
                    animate={{
                      opacity: [0.2, 0.3, 0.2],
                      transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="section-padding bg-primary-50 from-primary-600 to-secondary-600" ref={ctaRef}>
        <motion.div
          className="container-custom text-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate={isCtaInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={headerVariants}
          >
            Une expertise qui vous ressemble ?
          </motion.h2>
          <motion.p
            className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          >
            Chaque projet est unique et mérite une approche sur-mesure. 
            Discutons de vos défis et découvrons ensemble les solutions les plus adaptées.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={containerVariants}
          >
            <motion.a
              href="/contact"
              className="btn-accent text-lg px-10 py-4"
              variants={buttonVariants}
              animate="animate"
              whileHover="hover"
            >
              Démarrer un projet
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </motion.a>
            <motion.a
              href="/a-propos"
              className="btn-secondary text-lg px-10 py-4"
              variants={buttonVariants}
              animate="animate"
              whileHover="hover"
            >
              En savoir plus sur nous
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Expertise;