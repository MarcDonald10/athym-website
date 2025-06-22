import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Zap, Cog, Smartphone, ArrowRight } from 'lucide-react';
import { motion, useAnimation, useInView, useMotionValue, useSpring } from 'framer-motion';
import Particles from 'react-particles';
// import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

interface Expertise {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
  link: string;
}

const expertises: Expertise[] = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Construction & Écologie',
    description: 'Solutions durables pour le bâtiment de demain',
    color: 'from-green-500 to-emerald-600',
    link: '/expertises#construction',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Énergie & Industrie',
    description: 'Innovation énergétique et optimisation industrielle',
    color: 'from-blue-500 to-cyan-600',
    link: '/expertises#energie',
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: 'Urbanisme & Mobilité',
    description: 'Villes intelligentes et mobilité durable',
    color: 'from-purple-500 to-indigo-600',
    link: '/expertises#urbanisme',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'IT & Télécom',
    description: 'Technologies de pointe et télécommunications',
    color: 'from-orange-500 to-red-600',
    link: '/expertises#it',
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
  pulse: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const iconVariants = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

const buttonVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    boxShadow: [
      '0 0 0px rgba(244, 244, 241, 0.7)',
      '0 0 20px rgba(243, 243, 237, 0.7)',
      '0 0 0px rgba(252, 252, 250, 0.7)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const Expertises: React.FC = () => {
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

  // Composant pour les étoiles filantes
  const ShootingStar: React.FC = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springConfig = { stiffness: 100, damping: 20 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    return (
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-white to-blue-300 shadow-[0_0_12px_4px_rgba(255,255,255,0.6)]"
        style={{
          width: `${2 + Math.random() * 3}px`,
          height: `${2 + Math.random() * 3}px`,
          top: `${Math.random() * 40}%`,
          x: xSpring,
          y: ySpring,
        }}
        animate={{
          x: ['-100vw', '100vw'],
          y: ['-100vh', '100vh'],
          opacity: [1, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          repeatDelay: Math.random() * 3,
          ease: 'linear',
        }}
      >
        <div
          className="absolute h-1 bg-gradient-to-r from-white to-transparent -right-20 top-1/2 -translate-y-1/2"
          style={{ width: `${12 + Math.random() * 8}rem` } as React.CSSProperties}
        />
      </motion.div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-primary-50  from-indigo-950 to-black relative overflow-hidden starry-sky"
    >
      {/* Particules connectées */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'connect' },
              onClick: { enable: true, mode: 'push' },
            },
            modes: {
              connect: { distance: 100, links: { opacity: 0.3 } },
              push: { quantity: 3 },
            },
          },
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.4, random: true },
            size: { value: 2, random: { enable: true, minimumValue: 1 } },
            links: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Étoiles filantes (plus nombreuses pour un mouvement continu) */}
      {Array.from({ length: 8 }).map((_, index) => (
        <ShootingStar key={index} />
      ))}

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-5xl font-bold   from-blue-400 to-purple-400  bg-clip-text mb-6 tracking-tight text-neutral-50" 
          >
            Nos Expertises
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-xl text-neutral-200 max-w-3xl mx-auto"
          >
            Quatre domaines d'excellence pour accompagner votre transformation digitale et industrielle
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {expertises.map((expertise, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              animate="pulse"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="group card p-8 text-center bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:bg-white/20"
            >
              <Link to={expertise.link}>
                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-white ${expertise.color} flex items-center justify-center text-primary-50 relative overflow-hidden`}
                  variants={iconVariants}
                  animate="rotate"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                >
                  {expertise.icon}
                  <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {expertise.title}
                </h3>
                <p className="text-neutral-200 group-hover:text-white transition-colors duration-300">
                  {expertise.description}
                </p>
                <ArrowRight className="w-5 h-5 mx-auto mt-6 text-neutral-100 group-hover:text-blue-300 transform group-hover:translate-x-3 transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.div
            variants={buttonVariants}
            animate="pulse"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link
              to="/expertises"
              className="btn-secondary inline-flex items-center text-lg px-8 py-4 rounded-full  from-blue-700 to-indigo-700 text-black transition-all duration-200 hover:shadow-[0_0_20px_rgba(255, 255, 0,0.7)] group relative focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
            >
              Découvrir toutes nos expertises
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertises;