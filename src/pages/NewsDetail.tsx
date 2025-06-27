// src/components/news/NewsDetail.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Twitter, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import ecologi1 from '../assets/images/ecologie.jpg'
import energie from '../assets/images/energie1.jpg'
import urbain from '../assets/images/eco.jpg'
import tech from '../assets/images/it-1.jpg'


interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
  category: string;
  categoryColor: string;
  content: string[];
  isFeatured?: boolean;
}

// Shared data (move to src/data/news.ts in production)
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Athyms Solutions remporte un prix pour l’innovation durable',
    excerpt: 'Notre projet en construction écologique a brillé aux Awards 2025.',
    date: '25 Juin 2025',
    image: ecologi1,
    link: '/news/prix-innovation',
    category: 'Écologie',
    categoryColor: 'bg-blue-400',
    content: [
      'Athyms Solutions a été honorée aux Awards 2025 pour son projet révolutionnaire en construction écologique.',
      'Ce prix récompense nos efforts pour intégrer des matériaux durables et des technologies de pointe, réduisant l’empreinte carbone de 30 % tout en améliorant l’efficacité énergétique des bâtiments.',
      'Notre équipe a collaboré avec des experts mondiaux pour concevoir des solutions adaptées aux défis climatiques actuels, marquant une étape clé dans notre mission pour un avenir durable.',
    ],
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Partenariat stratégique dans l’énergie renouvelable',
    excerpt: 'Une collaboration avec un leader mondial pour révolutionner les solutions énergétiques propres.',
    date: '20 Juin 2025',
    image: energie,
    link: '/news/partenariat-energie',
    category: 'Énergie',
    categoryColor: 'bg-blue-500',
    content: [
      'Athyms Solutions a signé un partenariat stratégique avec un leader mondial de l’énergie renouvelable.',
      'Ce projet vise à déployer des technologies solaires et éoliennes de nouvelle génération, capables de fournir une énergie durable à plus de 10 000 foyers d’ici 2026.',
      'Cette collaboration renforce notre position de leader dans le secteur de l’énergie verte et accélère la transition vers un avenir sans carbone.',
    ],
  },
  {
    id: 3,
    title: 'Lancement de notre plateforme IoT pour villes intelligentes',
    excerpt: 'Une solution innovante pour optimiser la gestion urbaine et promouvoir une mobilité durable.',
    date: '15 Juin 2025',
    image: urbain,
    link: '/news/plateforme-iot',
    category: 'Urbanisme',
    categoryColor: 'bg-blue-600',
    content: [
      'Notre nouvelle plateforme IoT pour villes intelligentes a été officiellement lancée.',
      'Cette technologie permet une surveillance en temps réel du trafic, des infrastructures et des services publics, tout en réduisant les coûts opérationnels de 25 %.',
      'En intégrant des capteurs avancés et des algorithmes d’IA, notre plateforme favorise une mobilité durable et améliore la qualité de vie des citoyens.',
    ],
  },
  {
    id: 4,
    title: 'Avancées majeures dans les télécommunications 5G',
    excerpt: 'Nos équipes IT dévoilent une technologie de pointe pour une connectivité ultra-rapide.',
    date: '10 Juin 2025',
    image: tech,
    link: '/news/telecom-5g',
    category: 'Technologie',
    categoryColor: 'bg-blue-400',
    content: [
      'Athyms Solutions repousse les limites de la connectivité avec des avancées majeures dans les télécommunications 5G.',
      'Nos équipes IT ont développé une infrastructure capable de supporter des vitesses de connexion ultra-rapides, réduisant la latence à moins de 1 ms.',
      'Cette technologie permettra aux entreprises et aux particuliers de bénéficier d’une communication fluide, ouvrant la voie à des applications innovantes comme la réalité augmentée.',
    ],
  },
];

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => {
            el.classList.add('animate-fade-slide-up');
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    // Simulate API delay
    setTimeout(() => setIsLoading(false), 500);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setTilt({ x: x * 10, y: y * 10 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleShare = (platform?: 'twitter' | 'linkedin') => {
    const url = window.location.href;
    const text = newsItem?.title || 'Découvrez cet article d’Athyms Solutions !';
    if (platform === 'twitter') {
      window.open(`https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else {
      navigator.clipboard.write(url);
      alert('Lien copié dans le presse-papiers !');
    }
  };

  const newsItem = newsItems.find((item) => item.link === `/news/${id}`);

  if (isLoading) {
    return (
      <section className="bg-white dark:bg-blue-950 py-20">
        <div className="container-custom text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-blue-400 rounded w-1/2 mx-auto mb-6"></div>
            <div className="h-64 sm:h-96 bg-gray-200 dark:bg-gray-300 rounded-3xl mb-8"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-300 rounded w-2/3 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!newsItem) {
    return (
      <section className="bg-white dark:bg-blue-950 py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">Article non trouvé</h2>
          <p className="text-gray-100 mb-8">L’article demandé n’existe pas ou a été supprimé.</p>
          <Link
            to="/actualites"
            className="inline-flex items-center text-lg px-8 py-2 rounded-full bg-white dark:bg-blue-600 text-blue-700 dark:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(241,245,249,0.8)] group focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-4"
            aria-label="Retour à la liste des actualités"
          >
            Retour aux actualités
            <ArrowLeft className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:scale-125 group-hover:-translate-x-2" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-700 to-blue-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 starfield" />
        <div className="container-custom relative z-10">
          <motion.div
            className="flex items-center justify-between mb-6 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 sticky top-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            
          </motion.div>
          <motion.span
            className={`inline-block px-4 py-1.5 ${newsItem.categoryColor} text-white text-sm font-semibold rounded-full animate-pulse-glow animate-on-scroll`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            {newsItem.category}
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-white text-white bg-clip-text mb-4 animate-3d-title animate-on-scroll"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {newsItem.title}
          </motion.h1>
          <motion.p
            className="text-gray-100 text-lg animate-on-scroll"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {newsItem.date}
          </motion.p>
        </div>
      </div>

      {/* Body with Starry Sky */}
      <div className="bg-white dark:bg-blue-950 relative starry-sky py-20">
        {/* Shooting Stars with Varied Trajectories */}
        {[0, 1, 2].map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-star-white to-[rgba(var(--star-color),0.8)] shadow-[0_0_15px_5px_rgba(241,245,249,0.7)] animate-shooting-star after:content-[''] after:absolute after:h-1 after:bg-gradient-to-r after:from-[rgba(241,245,249,0.9)] after:to-transparent after:-right-24 after:top-1/2 after:-translate-y-1/2"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              top: `${5 + Math.random() * 60}%`,
              left: index % 2 ? '-10%' : '110%',
              animationDelay: `${index * 0.8}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
              zIndex: 5,
              '--tw-after-width': `${14 + Math.random() * 10}rem`,
              '--star-color': index % 2 ? '234,179,8' : '209,213,219', // Gold or silver
              transform: `rotate(${index % 2 ? -15 : 15}deg)`,
            } as React.CSSProperties}
          />
        ))}

        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-4xl mx-auto bg-white/10 dark:bg-blue-950/20 backdrop-blur-xl border border-blue-400/40 rounded-3xl p-8 shadow-[0_4px_12px_rgba(59,130,246,0.2)] hover:shadow-[0_8px_24px_rgba(59,130,246,0.4)] transition-all duration-500 neumorphic animate-on-scroll"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            role="article"
            aria-labelledby={`news-title-${newsItem.id}`}
          >
            <motion.img
              ref={imageRef}
              src={newsItem.image}
              alt={`Image illustrant l'article : ${newsItem.title}`}
              className="w-full h-64 sm:h-96 object-cover rounded-3xl mb-8 border border-blue-400/40 shadow-lg animate-on-scroll transform-gpu"
              style={{ transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
              loading="lazy"
              srcSet={`${newsItem.image} 1x, ${newsItem.image.replace('.jpg', '@2x.jpg')} 2x`}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="prose prose-invert text-gray-100 max-w-none" id={`news-title-${newsItem.id}`}>
              {newsItem.content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-lg leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Related Articles Carousel */}
          <motion.div
            className="mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {/* <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6 animate-on-scroll">
              Articles similaires
            </h2> */}
            {/* <div className="flex space-x-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200">
              {newsItems
                .filter((item) => item.id !== newsItem.id && item.category === newsItem.category)
                .slice(0, 3)
                .map((related, index) => (
                  <Link
                    key={related.id}
                    to={related.link}
                    className="group bg-blue-700 dark:bg-blue-600 border border-blue-400/40 rounded-3xl shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-500 snap-center min-w-[280px] animate-on-scroll transform-gpu"
                    style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                  >
                    <div
                      className="h-40 bg-cover bg-center rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${related.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-gray-100 mb-2 block">{related.date}</span>
                      <h3 className="text-lg font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                        {related.title}
                      </h3>
                      <p className="text-gray-100 text-sm line-clamp-2">{related.excerpt}</p>
                    </div>
                  </Link>
                ))}
            </div> */}
          </motion.div>
        </div>

        {/* Sticky Newsletter CTA */}
        {/* <motion.div
          className="fixed bottom-4 left-1/2 translate-x-1/2 bg-white/10 dark:bg-blue-950/20  rounded-full px-6 py-4 flex items-center space-x-4 max-w-lg w-full mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <input
            type="email"
            placeholder="Recevez nos actualités"
            className="flex-1 px-4 py-2 rounded-full bg-blue-700/50 dark:bg-blue-600/50 text-white border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-white focus:bg-blue-600/70 transition-all duration-300"
            aria-label="Inscrivez-vous à la newsletter"
          />
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 rounded-full bg-white dark:bg-blue-600 text-blue-700 dark:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(241,245,249,0.8)] animate-sparkle focus:outline-none focus:ring-4 focus:ring-white"
            aria-label="S’inscrire à la newsletter"
          >
            S’inscrire
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default NewsDetail;