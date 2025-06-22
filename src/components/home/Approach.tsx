import React, { useEffect, useRef } from 'react';
import { Users, Lightbulb, Award, Target } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Particles from 'react-particles';
// import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

interface Value {
  icon: JSX.Element;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Collaboration',
    description: 'Nous travaillons main dans la main avec nos clients',
  },
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: 'Innovation',
    description: "L'innovation est au cœur de notre démarche",
  },
  {
    icon: <Award className="w-12 h-12" />,
    title: 'Responsabilité',
    description: 'Engagement durable et éthique dans tous nos projets',
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: 'Audace',
    description: 'Oser repenser les modèles établis',
  },
];

// Variants pour les animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
  orbit: {
    x: [0, 5, 0, -5, 0],
    y: [0, -5, 0, 5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const iconVariants = {
  glow: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

const pulsarVariants = {
  pulse: {
    scale: [1, 1.5, 1],
    opacity: [0.5, 0, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeOut',
    },
  },
};

const Approach: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  // Initialisation des particules
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding  from-primary-50 to-secondary-50 relative overflow-hidden"
    >
      {/* Fond de nébuleuse */}
      <Particles
        id="tsparticles-approach"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'bubble' },
              onClick: { enable: true, mode: 'push' },
            },
            modes: {
              bubble: { distance: 200, size: 5, duration: 2, opacity: 0.7 },
              push: { quantity: 3 },
            },
          },
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: ['#3b82f6', '#a855f7', '#10b981'] },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: { enable: true, minimumValue: 1 } },
            move: {
              enable: true,
              speed: 0.8,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Section des valeurs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="bg-white rounded-2xl p-8 shadow-lg relative"
          >
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  animate="orbit"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="text-center group"
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 bg-primary-50 from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center text-white relative overflow-hidden"
                    variants={iconVariants}
                    animate="glow"
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  >
                    {value.icon}
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <h4 className="font-bold text-neutral-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-neutral-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section de l'approche */}
          <motion.div variants={containerVariants} initial="hidden" animate={controls}>
            <motion.h2
              variants={cardVariants}
              animate={{
                scale: [1, 1.02, 1],
                textShadow: [
                  '0 0 0px rgba(59,130,246,0.5)',
                  '0 0 10px rgba(59,130,246,0.5)',
                  '0 0 0px rgba(59,130,246,0.5)',
                ],
                transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
            >
              Notre Approche
            </motion.h2>
            <motion.p
              variants={cardVariants}
              className="text-xl text-neutral-600 mb-8 leading-relaxed"
            >
              Nous croyons en une innovation responsable et collaborative. Notre méthode unique
              combine expertise technique pointue et compréhension profonde des enjeux business.
            </motion.p>
            <div className="space-y-4 relative">
              {/* Ligne de timeline animée */}
              <motion.div
                className="absolute left-4 top-0 w-1 bg-primary-600"
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
              />
              {[
                {
                  number: 1,
                  title: 'Analyse & Stratégie',
                  description: 'Compréhension approfondie de vos enjeux et définition de la stratégie optimale.',
                  color: 'bg-primary-600',
                },
                {
                  number: 2,
                  title: 'Prototypage & Tests',
                  description: 'Développement rapide de prototypes et validation par l’expérimentation.',
                  color: 'bg-secondary-600',
                },
                {
                  number: 3,
                  title: 'Industrialisation',
                  description: 'Passage à l’échelle et accompagnement vers la mise sur le marché.',
                  color: 'bg-accent-600',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className="flex items-start space-x-4 relative"
                  transition={{ delay: index * 0.3 }}
                >
                  <motion.div
                    className={`w-8 h-8 ${step.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1 relative`}
                    animate="pulse"
                    variants={pulsarVariants}
                  >
                    <span className="text-white font-bold text-sm">{step.number}</span>
                    <motion.div
                      className={`absolute inset-0 rounded-full ${step.color} opacity-50`}
                      variants={pulsarVariants}
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2">{step.title}</h4>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Approach;