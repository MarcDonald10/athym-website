import React from 'react';
import { Users, Target, Award, Lightbulb, TrendingUp, Shield, Heart, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Nous croyons en la force du travail d\'équipe et de la co-création avec nos clients.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'L\'innovation responsable guide chacune de nos actions et recommandations.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Responsabilité',
      description: 'Engagement durable et éthique dans tous nos projets et partenariats.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Audace',
      description: 'Oser repenser les modèles établis pour créer les solutions de demain.'
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Création d\'Athyms Solutions',
      description: 'Fondation de l\'entreprise avec une vision claire : démocratiser l\'innovation industrielle.'
    },
    {
      year: '2019',
      title: 'Premiers grands projets',
      description: 'Accompagnement de startups innovantes dans leurs phases de prototypage et d\'industrialisation.'
    },
    {
      year: '2020',
      title: 'Expansion des expertises',
      description: 'Développement de nouvelles compétences en urbanisme et mobilité durable.'
    },
    {
      year: '2021',
      title: 'Partenariats stratégiques',
      description: 'Création d\'un réseau d\'experts et de partenaires technologiques de premier plan.'
    },
    {
      year: '2022',
      title: 'Reconnaissance métier',
      description: 'Prix de l\'innovation décerné par la Chambre de Commerce de Grenoble.'
    },
    {
      year: '2023',
      title: 'Croissance soutenue',
      description: 'Doublement de l\'équipe et expansion vers de nouveaux secteurs d\'activité.'
    },
    {
      year: '2024',
      title: 'Vision 2030',
      description: 'Lancement de notre stratégie de développement durable et d\'innovation responsable.'
    }
  ];

  const reasons = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Expertise reconnue',
      description: 'Plus de 6 ans d\'expérience dans l\'accompagnement à l\'innovation industrielle avec un taux de réussite de 95%.'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Approche collaborative',
      description: 'Nous travaillons en co-création avec nos clients, garantissant une solution parfaitement adaptée à leurs besoins.'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Résultats concrets',
      description: 'Nos accompagnements génèrent en moyenne 40% d\'accélération du time-to-market de nos clients.'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Engagement durable',
      description: 'Nous nous engageons sur le long terme avec nos clients et intégrons les enjeux RSE dans tous nos projets.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary-50 from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 text-white mb-6">
                À propos de nous
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed text-white">
                Depuis ses débuts, Athyms Solutions accompagne les entreprises à chaque étape de leur
                transformation technologique. Nous intervenons depuis la veille stratégique jusqu’à la mise en
                production, en passant par le prototypage et la préparation industrielle.

              </p>
              <p className="text-lg text-neutral-600 mb-8 text-white">
                Nous sommes passionnés par les idées qui bousculent les standards – et surtout par leur
                réalisation concrète.
              </p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div>
                      <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
                      <div className="text-neutral-600">Projets accompagnés</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-secondary-600 mb-2">95%</div>
                      <div className="text-neutral-600">Taux de réussite</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-accent-600 mb-2">6</div>
                      <div className="text-neutral-600">Années d'expertise</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-neutral-800 mb-2">20+</div>
                      <div className="text-neutral-600">Experts partenaires</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Quatre piliers fondamentaux qui guident notre action quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card p-8 text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-50 from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Notre Histoire
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Retracez les grandes étapes de notre développement et de notre croissance
            </p>
          </div>

          <div className="relative">
            
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-400 to-secondary-400 h-full hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center animate-slide-up ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="card p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                          {item.year.slice(-2)}
                        </div>
                        <div>
                          <div className="text-sm text-neutral-500">{item.year}</div>
                          <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-neutral-600">{item.description}</p>
                    </div>
                  </div>

                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Pourquoi nous choisir */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Ce qui fait la différence Athyms Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary-50 from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center text-white">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-50 from-primary-600 to-secondary-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à innover ensemble ?
          </h2>
          <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
            Rejoignez les entreprises qui ont choisi Athyms Solutions pour accélérer leur innovation.
            Discutons de votre projet et découvrons ensemble comment le concrétiser.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="btn-accent text-lg px-10 py-4">
              Nous contacter
            </a>
            <a href="/expertises" className="btn-secondary text-lg px-10 py-4">
              Découvrir nos expertises
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;