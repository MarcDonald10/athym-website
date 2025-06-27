import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

const subjects = [
  "Demande d'information",
  'Nouveau projet',
  'Partenariat',
  'Support technique',
  'Autre',
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    alert('Message envoyé avec succès ! Nous vous recontacterons rapidement.');

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <div className="card p-8">
        <h2 className="text-3xl font-bold text-neutral-900 mb-8">
          Contactez-nous
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Prénom *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Nom *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-neutral-700 mb-2"
            >
              Entreprise
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-neutral-700 mb-2"
            >
              Sujet *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
            >
              <option value="">Sélectionnez un sujet</option>
              {subjects.map((subject, index) => (
                <option key={index} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-700 mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              placeholder="Décrivez votre projet, vos besoins ou vos questions..."
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 resize-vertical"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="loading-spinner mr-2"></div>
                Envoi en cours...
              </>
            ) : (
              <>
                Envoyer le message
              </>
            )}
          </button>
          <p className="text-sm text-neutral-500 text-center">
            * Champs obligatoires. Nous nous engageons à répondre sous 24h.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;