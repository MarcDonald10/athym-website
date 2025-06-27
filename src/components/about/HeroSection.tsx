import React from 'react';
import { motion } from 'framer-motion';
import { Stat } from './types';

const HeroSection: React.FC = () => {
  const stats: Stat[] = [
    { value: '150+', label: 'Projets accompagnés' },
    { value: '95%', label: 'Taux de réussite' },
    { value: '6', label: "Années d'expertise" },
    { value: '20+', label: 'Experts partenaires' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animations créatives avec motifs pour chaque statistique
  const numberVariants = [
    // Stat 1: Pulsation avec bordure animée
    {
      animate: {
        scale: [1, 1.15, 1],
        rotate: [0, 5, 0],
        borderColor: ['#3B82F6', '#10B981', '#3B82F6'], // Dégradé de bordure
        transition: {
          repeat: Infinity,
          duration: 2.5,
          ease: 'easeInOut',
        },
      },
      hover: {
        scale: 1.2,
        transition: { duration: 0.3 },
      },
    },
    // Stat 2: Flottement avec ombre dynamique
    {
      animate: {
        y: [0, -6, 0],
        boxShadow: [
          '0px 0px 0px rgba(0,0,0,0.2)',
          '0px 8px 16px rgba(59,130,246,0.4)',
          '0px 0px 0px rgba(0,0,0,0.2)',
        ],
        transition: {
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut',
        },
      },
      hover: {
        y: -10,
        transition: { duration: 0.3 },
      },
    },
    // Stat 3: Zoom avec dégradé de fond animé
    {
      animate: {
        scale: [1, 1.1, 1],
        background: [
          'linear-gradient(45deg, #1E3A8A, #3B82F6)',
          'linear-gradient(45deg, #3B82F6, #1E3A8A)',
          'linear-gradient(45deg, #1E3A8A, #3B82F6)',
        ],
        transition: {
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut',
        },
      },
      hover: {
        scale: 1.15,
        transition: { duration: 0.3 },
      },
    },
    // Stat 4: Bounce avec effet de particules (via pseudo-élément)
    {
      animate: {
        y: [0, -4, 0],
        x: [0, 3, 0],
        transition: {
          repeat: Infinity,
          duration: 2.2,
          ease: 'easeInOut',
        },
      },
      hover: {
        scale: 1.1,
        x: 5,
        transition: { duration: 0.3 },
      },
    },
  ];

  return (
    <section className="section-padding bg-primary-50 from-primary-50 to-secondary-50">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              À propos de nous
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Depuis ses débuts, Athyms Solutions accompagne les entreprises à chaque étape de leur
              transformation technologique. Nous intervenons depuis la veille stratégique jusqu’à la
              mise en production, en passant par le prototypage et la préparation industrielle.
            </p>
            <p className="text-lg text-white mb-8">
              Nous sommes passionnés par les idées qui bousculent les standards – et surtout par leur
              réalisation concrète.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-8 text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <motion.div
                      className="text-4xl font-bold text-primary-600 mb-2 relative z-10"
                      variants={numberVariants[index]}
                      animate="animate"
                      whileHover="hover"
                      style={{
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: index === 0 ? '2px solid' : 'none', // Bordure pour Stat 1
                        background: index === 2 ? 'linear-gradient(45deg, #1E3A8A, #3B82F6)' : 'transparent', // Dégradé pour Stat 3
                      }}
                    >
                      {stat.value}
                      {/* Pseudo-élément pour effet de particules sur Stat 4 */}
                      {index === 3 && (
                        <motion.div
                          className="absolute inset-0 -z-10"
                          animate={{
                            background: [
                              'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)',
                              'radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(16,185,129,0) 70%)',
                              'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)',
                            ],
                          }}
                          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        />
                      )}
                    </motion.div>
                    <div className="text-neutral-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;