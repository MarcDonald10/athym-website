import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

interface ContactInfoItem {
    icon: JSX.Element;
    title: string;
    details: string[];
    link?: string;
}

const ContactInfo: React.FC = () => {
    const contactInfo: ContactInfoItem[] = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Adresse',
            details: ['Grenoble, France', 'Dakar, Sénégal'],
            link: 'https://maps.google.com/?q=Grenoble,France',
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email',
            details: ['contact@athyms-solutions.fr'],
            link: 'mailto:contact@athyms-solutions.fr',
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Téléphone',
            details: ['+33 758 814 737'],
            link: 'tel:0758814737',
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Horaires',
            details: ['Lun - Ven : 9h - 18h', 'Sam - Dim : Fermé'],
        },
    ];

    return (
        <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                Nos Coordonnées
            </h2>
            <div className="space-y-8">
                {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-50 from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                            {info.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-neutral-900 mb-2">{info.title}</h3>
                            {info.details.map((detail, detailIndex) => (
                                <div key={detailIndex}>
                                    <span className="text-neutral-600">{detail}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactInfo;