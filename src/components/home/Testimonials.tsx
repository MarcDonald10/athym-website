// src/components/home/Testimonials.tsx
import React from 'react';
import { Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Athyms Solutions a transformé notre approche de l'innovation. Leur expertise technique et leur vision stratégique nous ont permis d'accélérer notre développement.",
    author: "Marie Dubois",
    company: "Directrice Innovation, TechCorp",
    rating: 5,
  },
  {
    quote: "Un partenaire de confiance qui nous accompagne depuis le prototype jusqu'à l'industrialisation. Leur méthode est structurée et leurs résultats concrets.",
    author: "Pierre Martin",
    company: "CEO, GreenTech Solutions",
    rating: 5,
  },
];

// Variants pour les animations des cartes
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1,
    },
  },
};

// Variants pour les étoiles
const starVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0, 
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

// Variants pour l'avatar
const avatarVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const Testimonials: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-secondary-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Découvrez ce que nos clients pensent de notre accompagnement
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                transition: { duration: 0.3 },
              }}
              className="card p-8 bg-white rounded-lg shadow-lg border border-neutral-100"
            >
              <motion.div variants={cardVariants} className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div key={i} variants={starVariants}>
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </motion.div>
              <motion.blockquote
                variants={cardVariants}
                className="text-lg text-neutral-700 mb-6 italic leading-relaxed"
              >
                "{testimonial.quote}"
              </motion.blockquote>
              <motion.div variants={cardVariants} className="flex items-center">
                <motion.div
                  variants={avatarVariants}
                  className="w-12 h-12 bg-primary-50 from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-bold mr-4"
                >
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </motion.div>
                <motion.div variants={cardVariants}>
                  <div className="font-bold text-neutral-900">{testimonial.author}</div>
                  <div className="text-neutral-600">{testimonial.company}</div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;