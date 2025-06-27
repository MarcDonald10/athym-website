import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <ContactHero />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <ContactInfo />
            </div>
            <ContactForm />
          </div>
          <ContactMap />
        </div>
      </section>
    </div>
  );
};

export default Contact;