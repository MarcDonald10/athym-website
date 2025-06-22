import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "+237656945851";
  const defaultMessage = "Bonjour, je souhaiterais en savoir plus sur vos services Athyms Solutions.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(defaultMessage)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <>
      {/* Main WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group animate-bounce-subtle"
          aria-label="Chat WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-neutral-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Discuter avec nous
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-neutral-800"></div>
          </div>
        </button>

        {/* Popup Modal */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="text-green-100 text-sm">Athyms Solutions</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-200 transition-colors duration-300"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="mb-4">
                <div className="bg-neutral-100 rounded-lg p-3 mb-3">
                  <p className="text-sm text-neutral-600 mb-2">
                    👋 Bonjour ! Nous sommes là pour vous aider.
                  </p>
                  <p className="text-sm text-neutral-800">
                    Discutez avec un responsable Athyms Solutions sur WhatsApp pour obtenir des réponses rapides à vos questions.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-800 font-medium mb-1">
                    ⚡ Réponse rapide garantie
                  </p>
                  <p className="text-xs text-green-600">
                    Nous répondons généralement en moins de 30 minutes pendant les heures ouvrables.
                  </p>
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Commencer la conversation</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <p className="text-xs text-neutral-500 text-center mt-3">
                En cliquant, vous serez redirigé vers WhatsApp
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppChat;