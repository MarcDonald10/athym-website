import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TimelineSection = () => {
  const timeline = [
    {
      year: '2018',
      title: 'Création d\'Athyms Solutions',
      description: 'Fondation de l\'entreprise avec une vision claire : démocratiser l\'innovation industrielle.',
    },
    {
      year: '2019',
      title: 'Premiers grands projets',
      description: 'Accompagnement de startups innovantes dans leurs phases de prototypage et d\'industrialisation.',
    },
    {
      year: '2020',
      title: 'Expansion des expertises',
      description: 'Développement de nouvelles compétences en urbanisme et mobilité durable.',
    },
    {
      year: '2021',
      title: 'Partenariats stratégiques',
      description: 'Création d\'un réseau d\'experts et de partenaires technologiques de premier plan.',
    },
    {
      year: '2022',
      title: 'Reconnaissance métier',
      description: 'Prix de l\'innovation décerné par la Chambre de Commerce de Grenoble.',
    },
    {
      year: '2023',
      title: 'Croissance soutenue',
      description: 'Doublement de l\'équipe et expansion vers de nouveaux secteurs d\'activité.',
    },
    {
      year: '2024',
      title: 'Vision 2030',
      description: 'Lancement de notre stratégie de développement durable et d\'innovation responsable.',
    },
  ];

  // Reference for scroll detection
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: (index) => (index % 2 === 0 ? -50 : 50), scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      scale: 1.03,
      boxShadow: '0px 8px 24px rgba(59,130,246,0.2)',
      transition: { duration: 0.3 },
    },
  };

  const yearVariants = [
    // 2018: Pulse with glowing border
    {
      animate: {
        scale: [1, 1.15, 1],
        borderColor: ['#3B82F6', '#10B981', '#3B82F6'],
        boxShadow: [
          '0px 0px 0px rgba(59,130,246,0)',
          '0px 0px 12px rgba(59,130,246,0.5)',
          '0px 0px 0px rgba(59,130,246,0)',
        ],
        transition: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' },
      },
      hover: { scale: 1.25, transition: { duration: 0.3 } },
    },
    // 2019: Float with dynamic shadow
    {
      animate: {
        y: [0, -5, 0],
        boxShadow: [
          '0px 0px 0px rgba(0,0,0,0.2)',
          '0px 6px 12px rgba(16,185,129,0.4)',
          '0px 0px 0px rgba(0,0,0,0.2)',
        ],
        transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
      },
      hover: { y: -8, transition: { duration: 0.3 } },
    },
    // 2020: Zoom with animated gradient
    {
      animate: {
        scale: [1, 1.1, 1],
        background: [
          'linear-gradient(45deg, #3B82F6, #10B981)',
          'linear-gradient(45deg, #10B981, #3B82F6)',
          'linear-gradient(45deg, #3B82F6, #10B981)',
        ],
        transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
      },
      hover: { scale: 1.2, transition: { duration: 0.3 } },
    },
    // 2021: Bounce with rotation
    {
      animate: {
        y: [0, -4, 0],
        rotate: [0, 6, 0],
        transition: { repeat: Infinity, duration: 2.3, ease: 'easeInOut' },
      },
      hover: { scale: 1.15, rotate: 10, transition: { duration: 0.3 } },
    },
    // 2022: Pulse with glowing effect
    {
      animate: {
        scale: [1, 1.15, 1],
        boxShadow: [
          '0px 0px 0px rgba(59,130,246,0)',
          '0px 0px 15px rgba(59,130,246,0.6)',
          '0px 0px 0px rgba(59,130,246,0)',
        ],
        transition: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' },
      },
      hover: { scale: 1.25, transition: { duration: 0.3 } },
    },
    // 2023: Float with particle-like glow
    {
      animate: {
        y: [0, -5, 0],
        x: [0, 3, 0],
        transition: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' },
      },
      hover: { scale: 1.2, x: 6, transition: { duration: 0.3 } },
    },
    // 2024: Zoom with animated border
    {
      animate: {
        scale: [1, 1.1, 1],
        borderColor: ['#3B82F6', '#10B981', '#3B82F6'],
        transition: { repeat: Infinity, duration: 2.8, ease: 'easeInOut' },
      },
      hover: { scale: 1.2, transition: { duration: 0.3 } },
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

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: '100%', transition: { duration: 1, ease: 'easeOut' } },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    animate: {
      scale: [1, 1.2, 1],
      boxShadow: [
        '0px 0px 0px rgba(59,130,246,0)',
        '0px 0px 10px rgba(59,130,246,0.5)',
        '0px 0px 0px rgba(59,130,246,0)',
      ],
      transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
    },
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
            Notre Histoire
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          >
            Retracez les grandes étapes de notre développement et de notre croissance
          </motion.p>
        </motion.div>
        <div className="relative">
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-400 to-secondary-400 h-full hidden lg:block"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          />
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                variants={itemVariants}
                custom={index}
                whileHover="hover"
              >
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="card p-6 bg-white rounded-2xl shadow-lg relative">
                    {/* Particle background effect */}
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
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4"
                        variants={yearVariants[index]}
                        animate="animate"
                        whileHover="hover"
                        style={{ border: index === 0 || index === 6 ? '2px solid' : 'none' }}
                      >
                        {item.year.slice(-2)}
                      </motion.div>
                      <div>
                        <motion.div
                          className="text-sm text-neutral-500"
                          variants={textVariants}
                        >
                          {item.year}
                        </motion.div>
                        <motion.h3
                          className="text-xl font-bold text-neutral-900"
                          variants={textVariants}
                        >
                          {item.title}
                        </motion.h3>
                      </div>
                    </div>
                    <motion.p
                      className="text-neutral-600"
                      variants={textVariants}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden lg:block"
                  variants={dotVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  whileHover={{ scale: 1.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;