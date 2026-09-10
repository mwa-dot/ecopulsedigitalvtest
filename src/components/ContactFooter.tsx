import React from 'react';
import { Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-white border-t border-forest/10 pt-16 sm:pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Form Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-forest">
            Prêt à accélérer votre impact ?
          </h2>
          <p className="text-forest/70 text-base sm:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Décrivez brièvement votre besoin. Nous vous recontacterons pour convenir d’un créneau de 30 minutes.
          </p>
          <div className="bg-forest/5 rounded-2xl p-4 text-xs sm:text-sm text-forest/80 text-left border border-forest/10 leading-relaxed">
            <strong>Note sur le livrable :</strong> À l'issue de cet échange, vous recevrez par e-mail une synthèse comprenant votre besoin reformulé, deux actions prioritaires recommandées et la prochaine étape proposée.
          </div>
        </div>

        {/* Reusable Contact Form Component */}
        <div className="mb-16 sm:mb-20">
          <ContactForm
            submitButtonText="Demander mon diagnostic offert"
            successTitle="Test réussi : le formulaire fonctionne en démonstration."
            successDescription="Toutes les validations ont été vérifiées avec succès."
            resetButtonText="Envoyer une autre demande"
            idPrefix="footer-contact"
          />
        </div>

        {/* Full Footer */}
        <div className="pt-10 sm:pt-12 border-t border-forest/10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 text-center md:text-left">
          {/* Brand & Info */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-forest font-bold text-xl sm:text-2xl mb-3 sm:mb-4">
              EcoPulse <span className="text-electric">Digital</span>
            </p>
            <p className="text-forest/70 text-xs sm:text-sm max-w-xs mb-5 sm:mb-6 leading-relaxed">
              Accélérez votre impact positif grâce à des solutions digitales sur-mesure combinant le meilleur du No-Code et de l'IA.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black hover:scale-105 transition-all" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 flex items-center justify-center text-[#1DA1F2] hover:scale-105 transition-all" 
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#E4405F]/10 hover:bg-[#E4405F]/20 flex items-center justify-center text-[#E4405F] hover:scale-105 transition-all" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-forest mb-3 sm:mb-4 text-base sm:text-lg">Contact</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-forest/70">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Mail size={16} className="text-electric flex-shrink-0" />
                <a href="mailto:contact@ecopulsedigital.fr" className="hover:text-electric transition-colors break-all">
                  contact@ecopulsedigital.fr
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin size={16} className="text-electric flex-shrink-0" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>

          {/* Legal / Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-forest mb-3 sm:mb-4 text-base sm:text-lg">Informations</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-forest/70">
              <li>
                <a href="#" className="hover:text-electric transition-colors">Mentions légales</a>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors">Politique de confidentialité</a>
              </li>
              <li>
                <a href="#" className="hover:text-electric transition-colors">Conditions Générales d'Utilisation</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-forest/10 flex flex-col items-center">
          <p className="text-xs sm:text-sm text-forest/60">
            &copy; {new Date().getFullYear()} EcoPulse Digital. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

