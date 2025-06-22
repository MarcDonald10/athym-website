// src/pages/Home.tsx
import React, { useState } from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Expertises from '../components/home/Expertises';
import Approach from '../components/home/Approach';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="min-h-screen">
      <Hero isVisible={isVisible} setIsVisible={setIsVisible} />
      <About />
      <Expertises />
      <Approach />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;