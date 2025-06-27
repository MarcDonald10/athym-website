// components/About/About.jsx
import React from 'react';
import HeroSection from '../components/about/HeroSection';
import ValuesSection from '../components/about/ValuesSection';
import TimelineSection from '../components/about/TimelineSection';
import ReasonsSection from '../components/about/ReasonsSection';
import CTASection from '../components/about/CTASection';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <HeroSection />
      <ValuesSection />
      {/* <TimelineSection /> */}
      <ReasonsSection />
      <CTASection />
    </div>
  );
};

export default About;