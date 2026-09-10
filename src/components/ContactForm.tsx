import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  type: string;
  need: string;
}

export interface ContactFormProps {
  /** Optional title displayed inside or above the form */
  title?: string;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Optional informational note (e.g. deliverable notice) */
  note?: string;
  /** Custom text for submit button */
  submitButtonText?: string;
  /** Custom title when submission succeeds */
  successTitle?: string;
  /** Custom description for success state */
  successDescription?: string;
  /** Custom label for reset button */
  resetButtonText?: string;
  /** Callback fired upon valid submission */
  onSubmitSuccess?: (data: ContactFormData) => void;
  /** Callback fired upon resetting form */
  onReset?: () => void;
  /** Initial form values */
  initialData?: Partial<ContactFormData>;
  /** Visual container style: 'card' (default) with border/shadow, or 'plain' for embedding */
  variant?: 'card' | 'plain';
  /** Extra CSS classes */
  className?: string;
  /** Prefix for input IDs to ensure unique DOM IDs when reused */
  idPrefix?: string;
}

const DEFAULT_INITIAL_DATA: ContactFormData = {
  name: '',
  email: '',
  organization: '',
  type: '',
  need: ''
};

export default function ContactForm({
  title,
  subtitle,
  note,
  submitButtonText = "Demander mon diagnostic offert",
  successTitle = "Demande envoyée avec succès !",
  successDescription = "Merci ! Votre demande a bien été transmise. Nous reviendrons vers vous très prochainement.",
  resetButtonText = "Envoyer une autre demande",
  onSubmitSuccess,
  onReset,
  initialData,
  variant = 'card',
  className = '',
  idPrefix = 'contact'
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    ...DEFAULT_INITIAL_DATA,
    ...initialData
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const nameId = `${idPrefix}-name`;
  const emailId = `${idPrefix}-email`;
  const orgId = `${idPrefix}-org`;
  const typeId = `${idPrefix}-type`;
  const needId = `${idPrefix}-need`;

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field as user types
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }

    if (status === 'error') {
      setStatus('idle');
      setErrorMessage(null);
    }
  };

  const handleReset = () => {
    setFormData({
      ...DEFAULT_INITIAL_DATA,
      ...initialData
    });
    setErrors({});
    setStatus('idle');
    setErrorMessage(null);
    if (onReset) {
      onReset();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Ce champ est obligatoire';
    if (!formData.email.trim()) {
      newErrors.email = 'Ce champ est obligatoire';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Format e-mail invalide';
    }
    if (!formData.organization.trim()) newErrors.organization = 'Ce champ est obligatoire';
    if (!formData.need.trim()) newErrors.need = 'Ce champ est obligatoire';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (!isSupabaseConfigured || !supabase) {
      setStatus('error');
      setErrorMessage(
        "Configuration Supabase requise : veuillez renseigner les variables d'environnement VITE_SUPABASE_URL et VITE_SUPABASE_PUBLISHABLE_KEY."
      );
      return;
    }

    setStatus('loading');
    setErrorMessage(null);

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            company: formData.organization.trim(),
            message: formData.need.trim(),
            source: 'landing-page'
          }
        ]);

      if (error) {
        throw error;
      }

      setStatus('success');
      if (onSubmitSuccess) {
        onSubmitSuccess(formData);
      }
    } catch (err: unknown) {
      console.error('Erreur insertion Supabase leads:', err);
      setStatus('error');
      const errDetail = err && typeof err === 'object' && 'message' in err
        ? String((err as { message: unknown }).message)
        : "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.";
      setErrorMessage(errDetail);
    }
  };

  const containerClasses = variant === 'card'
    ? `bg-white border border-forest/10 shadow-xl shadow-forest/5 rounded-3xl p-5 sm:p-8 md:p-10 ${className}`
    : `bg-transparent ${className}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={containerClasses}
    >
      {(title || subtitle || note) && (
        <div className="mb-8 text-center">
          {title && <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-forest">{title}</h3>}
          {subtitle && <p className="text-forest/70 text-base sm:text-lg mb-4">{subtitle}</p>}
          {note && (
            <div className="bg-forest/5 rounded-2xl p-4 text-xs sm:text-sm text-forest/80 text-left border border-forest/10">
              {note}
            </div>
          )}
        </div>
      )}

      {status === 'success' ? (
        <div className="bg-emerald-50 text-emerald-800 p-6 sm:p-8 rounded-2xl text-center border border-emerald-200">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-base sm:text-lg font-bold mb-2">{successTitle}</p>
          <p className="text-xs sm:text-sm text-emerald-700/80 mb-6">{successDescription}</p>
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2.5 rounded-xl border border-emerald-600/30 text-emerald-800 hover:bg-emerald-100/70 font-semibold text-sm transition-colors cursor-pointer"
          >
            {resetButtonText}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {errorMessage && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle size={18} className="flex-shrink-0 text-red-600 mt-0.5" />
              <div className="flex-1 leading-relaxed">
                {errorMessage}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor={nameId} className="block text-xs sm:text-sm font-bold text-forest mb-2">
                Prénom et Nom *
              </label>
              <input
                type="text"
                id={nameId}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="ex. Camille Dupont"
                className={`w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border ${
                  errors.name 
                    ? 'border-red-500 focus:ring-red-500 focus-visible:ring-red-500' 
                    : 'border-forest/20 focus:border-electric focus:ring-electric focus-visible:ring-electric'
                } bg-offwhite focus:ring-1 focus-visible:outline-none text-sm sm:text-base transition-all`}
              />
              {errors.name && <p className="mt-1 text-xs sm:text-sm text-red-500 font-medium">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor={emailId} className="block text-xs sm:text-sm font-bold text-forest mb-2">
                Adresse e-mail *
              </label>
              <input
                type="email"
                id={emailId}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nom@organisation.fr"
                className={`w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border ${
                  errors.email 
                    ? 'border-red-500 focus:ring-red-500 focus-visible:ring-red-500' 
                    : 'border-forest/20 focus:border-electric focus:ring-electric focus-visible:ring-electric'
                } bg-offwhite focus:ring-1 focus-visible:outline-none text-sm sm:text-base transition-all`}
              />
              {errors.email && <p className="mt-1 text-xs sm:text-sm text-red-500 font-medium">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor={orgId} className="block text-xs sm:text-sm font-bold text-forest mb-2">
                Nom de l'organisation / Projet *
              </label>
              <input
                type="text"
                id={orgId}
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="ex. Asso Impact"
                className={`w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border ${
                  errors.organization 
                    ? 'border-red-500 focus:ring-red-500 focus-visible:ring-red-500' 
                    : 'border-forest/20 focus:border-electric focus:ring-electric focus-visible:ring-electric'
                } bg-offwhite focus:ring-1 focus-visible:outline-none text-sm sm:text-base transition-all`}
              />
              {errors.organization && <p className="mt-1 text-xs sm:text-sm text-red-500 font-medium">{errors.organization}</p>}
            </div>

            <div>
              <label htmlFor={typeId} className="block text-xs sm:text-sm font-bold text-forest mb-2">
                Type de structure
              </label>
              <select
                id={typeId}
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-forest/20 bg-offwhite focus:border-electric focus:ring-1 focus:ring-electric focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric text-sm sm:text-base transition-all appearance-none"
              >
                <option value="">Sélectionnez une option...</option>
                <option value="Startup ESS">Startup ESS</option>
                <option value="ONG / Association">ONG / Association</option>
                <option value="Entreprise / PME">Entreprise / PME</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor={needId} className="block text-xs sm:text-sm font-bold text-forest mb-2">
              Votre besoin principal *
            </label>
            <textarea
              id={needId}
              name="need"
              rows={4}
              value={formData.need}
              onChange={handleChange}
              placeholder="Ex : Je souhaite automatiser le suivi de nos bénéficiaires et éviter les doubles saisies."
              className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border ${
                errors.need 
                  ? 'border-red-500 focus:ring-red-500 focus-visible:ring-red-500' 
                  : 'border-forest/20 focus:border-electric focus:ring-electric focus-visible:ring-electric'
              } bg-offwhite focus:ring-1 focus-visible:outline-none text-sm sm:text-base transition-all resize-none`}
            ></textarea>
            {errors.need && <p className="mt-1 text-xs sm:text-sm text-red-500 font-medium">{errors.need}</p>}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-blue-950 via-blue-900 to-electric text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 transition-all font-bold text-base sm:text-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center min-h-[52px] sm:min-h-[60px] shadow-lg shadow-blue-950/25 hover:shadow-blue-950/35 cursor-pointer"
            >
              {status === 'loading' ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                submitButtonText
              )}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
}

