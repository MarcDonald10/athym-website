// components/About/CTASection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <section className="section-padding bg-primary-50 from-primary-600 to-secondary-600">
      <div className="container-custom text-center text-white">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Prêt à innover ensemble ?
        </motion.h2>
        <motion.p
          className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Rejoignez les entreprises qui ont choisi Athyms Solutions pour accélérer leur innovation.
          Discutons de votre projet et découvrons ensemble comment le concrétiser.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="/contact"
            className="btn-accent text-lg px-10 py-4"
            variants={buttonVariants}
            whileHover="hover"
          >
            Nous contacter
          </motion.a>
          <motion.a
            href="/expertises"
            className="btn-secondary text-lg px-10 py-4"
            variants={buttonVariants}
            whileHover="hover"
          >
            Découvrir nos expertises
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;