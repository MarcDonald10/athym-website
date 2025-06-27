// src/components/home/News.tsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

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
    content: string; // Added for full article text
    isFeatured?: boolean;
}

interface EventItem {
    id: number;
    title: string;
    date: string;
    location: string;
    link: string;
}

const newsItems: NewsItem[] = [
    {
        id: 1,
        title: 'Athyms Solutions remporte un prix pour l’innovation durable',
        excerpt: 'Notre projet en construction écologique a brillé aux Awards 2025, récompensant notre engagement pour un avenir durable.',
        date: '25 Juin 2025',
        image: ecologi1,
        link: '/news/prix-innovation',
        category: 'Écologie',
        categoryColor: 'bg-white',
        content: 'Athyms Solutions a été honorée aux Awards 2025 pour son projet révolutionnaire en construction écologique. Ce prix récompense nos efforts pour intégrer des matériaux durables et des technologies de pointe, réduisant l’empreinte carbone de 30 % tout en améliorant l’efficacité énergétique des bâtiments. Notre équipe a collaboré avec des experts mondiaux pour concevoir des solutions adaptées aux défis climatiques actuels, marquant une étape clé dans notre mission pour un avenir durable.',
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
        categoryColor: 'bg-white',
        content: 'Athyms Solutions a signé un partenariat stratégique avec un leader mondial de l’énergie renouvelable pour développer des solutions énergétiques propres. Ce projet vise à déployer des technologies solaires et éoliennes de nouvelle génération, capables de fournir une énergie durable à plus de 10 000 foyers d’ici 2026. Cette collaboration renforce notre position de leader dans le secteur de l’énergie verte et accélère la transition vers un avenir sans carbone.',
    },
    {
        id: 3,
        title: 'Lancement de notre plateforme IoT pour villes intelligentes',
        excerpt: 'Une solution innovante pour optimiser la gestion urbaine et promouvoir une mobilité durable.',
        date: '15 Juin 2025',
        image: urbain,
        link: '/news/plateforme-iot',
        category: 'Urbanisme',
        categoryColor: 'bg-white',
        content: 'Notre nouvelle plateforme IoT pour villes intelligentes a été officiellement lancée, offrant des solutions pour optimiser la gestion urbaine. Cette technologie permet une surveillance en temps réel du trafic, des infrastructures et des services publics, tout en réduisant les coûts opérationnels de 25 %. En intégrant des capteurs avancés et des algorithmes d’IA, notre plateforme favorise une mobilité durable et améliore la qualité de vie des citoyens dans les métropoles modernes.',
    },
    {
        id: 4,
        title: 'Avancées majeures dans les télécommunications 5G',
        excerpt: 'Nos équipes IT dévoilent une technologie de pointe pour une connectivité ultra-rapide.',
        date: '10 Juin 2025',
        image: tech,
        link: '/news/telecom-5g',
        category: 'Technologie',
        categoryColor: 'bg-white',
        content: 'Athyms Solutions repousse les limites de la connectivité avec des avancées majeures dans les télécommunications 5G. Nos équipes IT ont développé une infrastructure capable de supporter des vitesses de connexion ultra-rapides, réduisant la latence à moins de 1 ms. Cette technologie permettra aux entreprises et aux particuliers de bénéficier d’une communication fluide, ouvrant la voie à des applications innovantes comme la réalité augmentée et les véhicules autonomes.',
    },

];

const eventItems: EventItem[] = [
    {
        id: 1,
        title: 'Conférence sur les villes intelligentes',
        date: '10 Juil. 2025',
        location: 'Paris, France',
        link: '/evenements/villes-intelligentes',
    },
    {
        id: 2,
        title: 'Webinaire sur l’énergie durable',
        date: '15 Juil. 2025',
        location: 'En ligne',
        link: '/evenements/webinaire-energie',
    },
    {
        id: 3,
        title: 'Salon de l’innovation technologique',
        date: '20 Juil. 2025',
        location: 'Lyon, France',
        link: '/evenements/salon-technologie',
    },
];

const News: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const recentGridRef = useRef<HTMLDivElement>(null);
    const eventsGridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        const triggerRipple = (gridRef: React.RefObject<HTMLDivElement>) => {
            if (gridRef.current) {
                gridRef.current.classList.add('animate-ripple-trigger');
                setTimeout(() => {
                    gridRef.current?.classList.remove('animate-ripple-trigger');
                }, 1500);
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    triggerRipple(recentGridRef);
                    triggerRipple(eventsGridRef);
                    interval = setInterval(() => {
                        triggerRipple(recentGridRef);
                        triggerRipple(eventsGridRef);
                    }, 5000);
                } else if (interval) {
                    clearInterval(interval);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            observer.disconnect();
            if (interval) clearInterval(interval);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden">
            {/* Hero Section */}
            <div className="bg-primary-50 py-20">
                <div className="container-custom text-center">
                    <h1 className="text-5xl mt-10 md:text-7xl font-extrabold text-white mb-6 tracking-tight animate-3d-title">
                        Actualités
                    </h1>
                    <p
                        className="text-xl md:text-2xl text-white max-w-4xl mx-auto animate-fade-slide-up"
                        style={{ animationDelay: '0.3s' }}
                    >
                        Plongez dans les dernières innovations et événements d’Athyms Solutions, où l’avenir brille comme les étoiles.
                    </p>
                    {/* <Link
                        to="/actualites"
                        className="mt-8 inline-flex items-center text-lg px-10 py-4 rounded-full bg-white text-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(241,245,249,0.8)] group focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-4 animate-pulse"
                    >
                        Explorer les actualités
                        <ArrowRight className="w-6 h-6 ml-3 text-blue-700 transition-transform duration-300 group-hover:scale-125 group-hover:translate-x-3" />
                    </Link> */}
                </div>
            </div>

            {/* Body with Starry Sky */}
            <div className="bg-white relative starry-sky py-20">
                {/* Shooting Stars */}
                {[0, 1, 2, 3, 4].map((_, index) => (
                    <div
                        key={index}
                        className="absolute rounded-full bg-gradient-to-r from-star-white to-[rgba(var(--star-color),0.8)] shadow-[0_0_15px_5px_rgba(241,245,249,0.7)] animate-shooting-star after:content-[''] after:absolute after:h-1 after:bg-gradient-to-r after:from-[rgba(241,245,249,0.9)] after:to-transparent after:-right-24 after:top-1/2 after:-translate-y-1/2"
                        style={{
                            width: `${2 + Math.random() * 3}px`,
                            height: `${2 + Math.random() * 3}px`,
                            top: `${5 + Math.random() * 60}%`,
                            animationDelay: `${index * 0.8}s`,
                            animationDuration: `${3 + Math.random() * 3}s`,
                            zIndex: 5,
                            '--tw-after-width': `${14 + Math.random() * 10}rem`,
                            '--star-color': index % 2 ? '234,179,8' : '209,213,219', // Gold or silver
                        } as React.CSSProperties}
                    />
                ))}

                <div className="container-custom relative z-10">
                    {/* Featured News Section */}
                    <div className="mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12 text-center animate-fade-slide-up">
                            À la une
                        </h2>
                        {newsItems
                            .filter((news) => news.isFeatured)
                            .map((news) => (
                                <Link
                                    key={news.id}
                                    to={news.link}
                                    className="group relative bg-primary-50 border border-blue-400/40 rounded-3xl shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-500 hover:bg-blue-600 opacity-0 animate-fade-slide-up overflow-hidden transform-gpu"
                                    style={{ animationDelay: '0.5s' }}
                                >
                                    <div
                                        className="h-80 md:h-96 bg-cover bg-center relative group-hover:scale-110 transition-transform duration-700 ease-out"
                                        style={{ backgroundImage: `url(${news.image})` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                                        <span
                                            className={`absolute top-6 left-6 px-4 py-1.5 ${news.categoryColor} text-primary-50 text-sm font-semibold rounded-full animate-pulse-glow`}
                                        >
                                            {news.category}
                                        </span>
                                    </div>
                                    <div className="p-8 md:p-12 relative z-10">
                                        <span className="text-sm text-gray-700 mb-3 block">{news.date}</span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                                            {news.title}
                                        </h3>
                                        <p className="text-gray-700 group-hover:text-primary-50 transition-colors duration-300 line-clamp-2">
                                            {news.excerpt}
                                        </p>
                                        <div className="flex items-center justify-end mt-6">
                                            <ArrowRight className="w-7 h-7 text-gray-100 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:translate-x-4" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>

                    {/* Recent News Section */}
                    <div className="mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-50 mb-12 text-center animate-fade-slide-up">
                            Actualités récentes
                        </h2>
                        <div
                            ref={recentGridRef}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        >
                            {newsItems
                                .filter((news) => !news.isFeatured)
                                .map((news, index) => (
                                    <Link
                                        key={news.id}
                                        to={news.link}
                                        className="group card relative bg-primary-50 border border-blue-400/40 rounded-3xl shadow-xl hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-500 hover:bg-blue-600 opacity-0 animate-fade-slide-up water-ripple overflow-hidden transform-gpu"
                                        style={{
                                            animationDelay: `${(index + 1) * 0.25}s`,
                                            '--ripple-delay': `${index * 0.2 + Math.random() * 0.1}s`,
                                        } as React.CSSProperties}
                                    >
                                        <div
                                            className="h-56 bg-cover bg-center relative group-hover:scale-105 transition-transform duration-700 ease-out"
                                            style={{ backgroundImage: `url(${news.image})` }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                                            <span
                                                className={`absolute top-4 left-4 px-3 py-1 ${news.categoryColor} text-primary-50 text-sm font-semibold rounded-full animate-pulse-glow`}
                                            >
                                                {news.category}
                                            </span>
                                        </div>
                                        <div className="p-6 relative z-10">
                                            <span className="text-sm text-gray-200 mb-2 block">{news.date}</span>
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                                                {news.title}
                                            </h3>
                                            <p className="text-gray-100 group-hover:text-white transition-colors duration-300 line-clamp-3">
                                                {news.excerpt}
                                            </p>
                                            <div className="flex items-center justify-end mt-4">
                                                <ArrowRight className="w-6 h-6 text-gray-100 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:translate-x-4" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>

                    {/* Events & Updates Section */}
                    <div className="mb-24 relative">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-50 mb-12 text-center animate-fade-slide-up">
                            Événements & Mises à jour
                        </h2>
                        <div
                            ref={eventsGridRef}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative events-timeline"
                        >
                            {eventItems.map((event, index) => (
                                <div
                                    className="group card relative bg-primary-50 border border-blue-400/40 rounded-3xl shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500 hover:bg-blue-600 opacity-0 animate-fade-slide-up water-ripple transform-gpu"
                                    style={{
                                        animationDelay: `${(index + 1) * 0.25}s`,
                                        '--ripple-delay': `${index * 0.2 + Math.random() * 0.1}s`,
                                    } as React.CSSProperties}
                                >
                                    <div className="p-6 flex items-start space-x-4">
                                        <Calendar className="w-8 h-8 text-gray-100 group-hover:text-white transition-colors duration-300" />
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                                                {event.title}
                                            </h3>
                                            <p className="text-gray-200 text-sm">{event.date}</p>
                                            <p className="text-gray-200 text-sm">{event.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    {/* <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-50 mb-6 animate-fade-slide-up">
                            Ne manquez aucune nouvelle
                        </h2>
                        <p
                            className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 animate-fade-slide-up"
                            style={{ animationDelay: '0.2s' }}
                        >
                            Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et événements directement dans votre boîte de réception.
                        </p>
                        <form className="flex justify-center gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="px-4 py-2 rounded-full bg-primary-50 text-white border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-white focus:bg-blue-600 transition-all duration-300"
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center text-lg px-8 py-2 rounded-full bg-white text-primary-50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(241,245,249,0.8)] group focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-4 animate-pulse"
                            >
                                S’inscrire
                                <ArrowRight className="w-5 h-5 ml-2 text-blue-700 transition-transform duration-300 group-hover:scale-125 group-hover:translate-x-2" />
                            </button>
                        </form>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default News;