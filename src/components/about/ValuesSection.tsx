import React, { useRef } from 'react';
import { Users, Lightbulb, Shield, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const ValuesSection = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Nous croyons en la force du travail d\'équipe et de la co-création avec nos clients.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'L\'innovation responsable guide chacune de nos actions et recommandations.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Responsabilité',
      description: 'Engagement durable et éthique dans tous nos projets et partenariats.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Audace',
      description: 'Oser repenser les modèles établis pour créer les solutions de demain.',
    },
  ];

  // Référence pour détecter l'entrée dans la vue
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: { scale: 1.05, boxShadow: '0px 8px 24px rgba(59,130,246,0.2)', transition: { duration: 0.3 } },
  };

  const iconVariants = [
    // Valeur 1: Pulsation avec rotation
    {
      animate: {
        scale: [1, 1.2, 1],
        rotate: [0, 10, 0],
        transition: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' },
      },
      hover: { scale: 1.3, transition: { duration: 0.3 } },
    },
    // Valeur 2: Flottement avec ombre dynamique
    {
      animate: {
        y: [0, -5, 0],
        boxShadow: [
          '0px 0px 0px rgba(0,0,0,0.2)',
          '0px 4px 12px rgba(16,185,129,0.4)',
          '0px 0px 0px rgba(0,0,0,0.2)',
        ],
        transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
      },
      hover: { y: -8, transition: { duration: 0.3 } },
    },
    // Valeur 3: Zoom avec dégradé de fond
    {
      animate: {
        scale: [1, 1.15, 1],
        background: [
          'linear-gradient(45deg, #3B82F6, #10B981)',
          'linear-gradient(45deg, #10B981, #3B82F6)',
          'linear-gradient(45deg, #3B82F6, #10B981)',
        ],
        transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
      },
      hover: { scale: 1.25, transition: { duration: 0.3 } },
    },
    // Valeur 4: Bounce avec effet de particules
    {
      animate: {
        y: [0, -4, 0],
        x: [0, 3, 0],
        transition: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' },
      },
      hover: { scale: 1.2, x: 5, transition: { duration: 0.3 } },
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="section-padding bg-neutral-50" ref={sectionRef}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
            variants={headerVariants}
          >
            Nos Valeurs
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          >
            Quatre piliers fondamentaux qui guident notre action quotidienne
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="card p-8 text-center group relative bg-white rounded-2xl shadow-lg"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Fond animé pour effet de particules */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-2xl"
                animate={{
                  background: [
                    'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)',
                    'radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0) 70%)',
                    'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)',
                  ],
                }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              />
              <motion.div
                className="w-16 h-16 mx-auto mb-6 bg-primary-50 from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center text-white"
                variants={iconVariants[index]}
                animate="animate"
                whileHover="hover"
                style={{
                  background: index === 2 ? 'linear-gradient(45deg, #3B82F6, #10B981)' : undefined,
                }}
              >
                {value.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-neutral-900 mb-4"
                variants={textVariants}
              >
                {value.title}
              </motion.h3>
              <motion.p
                className="text-neutral-600 leading-relaxed"
                variants={textVariants}
              >
                {value.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;