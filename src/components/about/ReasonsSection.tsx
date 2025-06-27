import React, { useRef } from 'react';
import { Target, Users, TrendingUp, Heart } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const ReasonsSection = () => {
  const reasons = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Expertise reconnue',
      description: 'Plus de 6 ans d\'expérience dans l\'accompagnement à l\'innovation industrielle avec un taux de réussite de 95%.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Approche collaborative',
      description: 'Nous travaillons en co-création avec nos clients, garantissant une solution parfaitement adaptée à leurs besoins.',
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Résultats concrets',
      description: 'Nos accompagnements génèrent en moyenne 40% d\'accélération du time-to-market de nos clients.',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Engagement durable',
      description: 'Nous nous engageons sur le long terme avec nos clients et intégrons les enjeux RSE dans tous nos projets.',
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
    hidden: { opacity: 0, x: -50, scale: 0.9 },
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

  const iconVariants = [
    // Reason 1: Pulse with rotation and border glow
    {
      animate: {
        scale: [1, 1.15, 1],
        rotate: [0, 8, 0],
        borderColor: ['#3B82F6', '#10B981', '#3B82F6'],
        transition: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' },
      },
      hover: { scale: 1.25, transition: { duration: 0.3 } },
    },
    // Reason 2: Float with dynamic shadow
    {
      animate: {
        y: [0, -6, 0],
        boxShadow: [
          '0px 0px 0px rgba(0,0,0,0.2)',
          '0px 6px 12px rgba(16,185,129,0.4)',
          '0px 0px 0px rgba(0,0,0,0.2)',
        ],
        transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
      },
      hover: { y: -10, transition: { duration: 0.3 } },
    },
    // Reason 3: Zoom with animated gradient
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
    // Reason 4: Bounce with particle effect
    {
      animate: {
        y: [0, -5, 0],
        x: [0, 4, 0],
        transition: { repeat: Infinity, duration: 2.3, ease: 'easeInOut' },
      },
      hover: { scale: 1.15, x: 6, transition: { duration: 0.3 } },
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
            Pourquoi nous choisir ?
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          >
            Ce qui fait la différence Athyms Solutions
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-6 relative bg-white p-6 rounded-2xl shadow-lg"
              variants={itemVariants}
              whileHover="hover"
            >
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
              <motion.div
                className="flex-shrink-0 w-16 h-16 bg-primary-50 from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center text-white"
                variants={iconVariants[index]}
                animate="animate"
                whileHover="hover"
                style={{
                  border: index === 0 ? '2px solid' : 'none', // Border for Reason 1
                  background: index === 2 ? 'linear-gradient(45deg, #3B82F6, #10B981)' : undefined,
                }}
              >
                {reason.icon}
              </motion.div>
              <div>
                <motion.h3
                  className="text-2xl font-bold text-neutral-900 mb-4"
                  variants={textVariants}
                >
                  {reason.title}
                </motion.h3>
                <motion.p
                  className="text-lg text-neutral-600 leading-relaxed"
                  variants={textVariants}
                >
                  {reason.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReasonsSection;