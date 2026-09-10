import React from 'react';
import { Settings, Zap, ArrowRight, Lightbulb, Users, Leaf, Recycle, HeartHandshake, CheckCircle2, CircleDollarSign, Clock, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const fadeInOptions = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

export default function Sections() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24">
      {/* 3. Section Présentation */}
      <section id="presentation" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div {...fadeInOptions} className="bg-forest/5 border border-forest/10 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-forest">L'alliance de la tech et de l'impact</h2>
          <p className="text-base sm:text-lg md:text-xl text-forest/80 max-w-3xl mx-auto leading-relaxed">
            EcoPulse Digital est un collectif engagé né d'une conviction simple : les structures 
            à impact environnemental et social méritent le meilleur de la technologie sans 
            se ruiner. Nous combinons l'agilité du <strong>No-Code</strong> et la puissance de l'<strong>IA</strong> pour 
            créer des solutions concrètes, évolutives et centrées sur l'humain.
          </p>
        </motion.div>
      </section>

      {/* 4. Section Problème */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div {...fadeInOptions} className="mb-8 sm:mb-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest">
            Le code traditionnel vous freine.
          </h2>
        </motion.div>

        <motion.div {...fadeInOptions} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col md:flex-row border border-forest/10 rounded-[24px] overflow-hidden shadow-sm bg-white">
          {/* Column 1 */}
          <div className="flex-1 p-6 sm:p-8 md:p-10 border-b md:border-b-0 md:border-r border-forest/10 bg-white">
            <div className="text-electric mb-4 sm:mb-5">
              <CircleDollarSign size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-forest">Coûts trop élevés</h3>
            <p className="text-forest/70 text-sm sm:text-base leading-relaxed text-left hyphens-auto">
              Les agences traditionnelles imposent des tickets d'entrée incompatibles avec la réalité économique des jeunes projets à impact.
            </p>
          </div>
          
          {/* Column 2 */}
          <div className="flex-1 p-6 sm:p-8 md:p-10 border-b md:border-b-0 md:border-r border-forest/10 bg-forest/[0.03]">
            <div className="text-electric mb-4 sm:mb-5">
              <Clock size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-forest">Délais trop longs</h3>
            <p className="text-forest/70 text-sm sm:text-base leading-relaxed text-left hyphens-auto">
              Le temps est précieux. Attendre des mois pour lancer un premier produit retarde la validation de votre modèle et votre impact sur le terrain.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex-1 p-6 sm:p-8 md:p-10 bg-white">
            <div className="text-electric mb-4 sm:mb-5">
              <Settings size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-forest">Rigidité technique</h3>
            <p className="text-forest/70 text-sm sm:text-base leading-relaxed text-left hyphens-auto">
              Le code sur-mesure est difficile à faire évoluer et vous rend dépendant d'équipes techniques coûteuses pour la moindre modification.
            </p>
          </div>
        </motion.div>

        <motion.div {...fadeInOptions} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 bg-forest rounded-[24px] p-6 sm:p-8 md:p-10 text-offwhite relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-electric/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 md:max-w-2xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">L'alternative : No-Code & IA</h3>
            <p className="text-offwhite/80 text-base sm:text-lg mb-0 leading-relaxed">
              Divisez par 4 les temps et coûts de développement tout en conservant une flexibilité totale. 
              Vous restez propriétaire et autonome sur vos outils.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
            <a href="#stack" className="flex justify-center items-center gap-2 bg-gradient-to-r from-blue-950 via-blue-900 to-electric text-white px-6 py-3.5 rounded-xl font-semibold hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-md shadow-blue-950/25 hover:shadow-blue-950/35 no-underline group w-full md:w-auto text-sm sm:text-base">
              Découvrez notre approche <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* 5. Section Notre Stack (Bento Grid) */}
      <section id="stack" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <motion.div {...fadeInOptions} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest">Notre Stack</h2>
          <p className="text-lg text-forest/70 max-w-2xl mx-auto">Une sélection pointue des meilleurs outils du marché pour bâtir vos solutions.</p>
        </motion.div>
        
        {/* Infinite Marquee de Logos/Outils */}
        <motion.div {...fadeInOptions} transition={{ duration: 0.6, delay: 0.1 }} className="relative w-full overflow-hidden mb-12 py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-4 px-2">
                {['Claude', 'Midjourney', 'DALL·E', 'Gemini', 'Mistral AI', 'Perplexity', 'Copilot', 'Adobe Firefly', 'HeyGen', 'Make', 'Airtable', 'Webflow'].map((tool, index) => (
                  <div key={`${i}-${index}`} className="flex-shrink-0 px-6 py-3 rounded-full border border-forest/10 bg-white/50 text-forest/80 font-medium text-lg whitespace-nowrap hover:border-forest/20 hover:text-forest transition-colors shadow-sm">
                    {tool}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Decorative blur for glassmorphism effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-forest/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
            <motion.div {...fadeInOptions} transition={{ duration: 0.6, delay: 0.1 }} className="group bg-forest/80 backdrop-blur-xl border border-white/10 rounded-[24px] p-6 sm:p-8 hover:bg-forest/90 hover:border-white/20 transition-all duration-300 h-full flex flex-col min-w-0 shadow-[0_8px_32px_rgba(6,78,59,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none transition-transform group-hover:scale-150"></div>
              <div className="mb-6 text-white relative z-10">
                <Quote size={28} className="fill-current opacity-90" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white relative z-10">No-Code Puissant</h3>
              <p className="text-offwhite/80 text-base sm:text-lg flex-grow break-words text-left relative z-10 hyphens-auto">
                Nous utilisons des bases de données relationnelles avancées comme <strong>Airtable</strong> et des outils d'automatisation comme <strong>Make</strong> pour concevoir l'architecture de votre solution. Des fondations solides, visuelles et facilement adaptables.
              </p>
            </motion.div>
            
            <motion.div {...fadeInOptions} transition={{ duration: 0.6, delay: 0.2 }} className="group bg-forest/80 backdrop-blur-xl border border-white/10 rounded-[24px] p-6 sm:p-8 hover:bg-forest/90 hover:border-white/20 transition-all duration-300 h-full flex flex-col min-w-0 shadow-[0_8px_32px_rgba(6,78,59,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none transition-transform group-hover:scale-150"></div>
              <div className="mb-6 text-white relative z-10">
                <Quote size={28} className="fill-current opacity-90" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white relative z-10">Intelligence Artificielle</h3>
              <p className="text-offwhite/80 text-base sm:text-lg flex-grow break-words text-left relative z-10 hyphens-auto">
                Intégration sur-mesure de modèles comme <strong>Gemini</strong> au cœur de vos flux de travail pour traiter la donnée, qualifier les demandes et assister vos équipes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Section Portfolio (Cas d'étude) */}
      <section id="portfolio" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div {...fadeInOptions} className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-forest">Notre Vision en Action</h2>
          <p className="text-base sm:text-lg text-forest/70 max-w-2xl mx-auto">Découvrez comment notre approche se traduit concrètement sur le terrain.</p>
        </motion.div>

        <div className="relative">
          {/* Decorative background blurs to make glassmorphism visible */}
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-electric/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-forest/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {/* Carte 1 */}
            <motion.div {...fadeInOptions} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(6,78,59,0.05)] rounded-3xl p-6 sm:p-7 lg:p-8 hover:bg-white/50 hover:border-white/80 hover:shadow-[0_16px_48px_rgba(6,78,59,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="mb-5 sm:mb-6 relative z-10">
                <span className="inline-block px-3 py-1 bg-forest/5 text-forest/70 text-xs font-bold rounded-full mb-3 sm:mb-4 uppercase tracking-wide">
                  Réseau Entraide
                </span>
                <h3 className="text-lg sm:text-xl font-bold leading-tight">Optimisation du suivi d'impact</h3>
              </div>
              <div className="flex flex-col gap-4 sm:gap-5 flex-grow">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-forest/50 uppercase tracking-wide mb-1">Besoin</h4>
                  <p className="text-forest/80 text-sm sm:text-base leading-relaxed">Automatiser la collecte et la centralisation des données de terrain.</p>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-forest/50 uppercase tracking-wide mb-1">Solution envisagée</h4>
                  <p className="text-forest/80 text-sm sm:text-base leading-relaxed">Interconnexion Airtable & Make pour regrouper les données d'activité.</p>
                </div>
                <div className="mt-auto pt-3 sm:pt-4 relative z-10">
                  <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_8px_32px_rgba(6,78,59,0.06)] rounded-2xl p-4 sm:p-5 grid grid-cols-2 gap-3 sm:gap-4 relative overflow-hidden group-hover:bg-white/80 transition-colors duration-300">
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-electric/10 rounded-full blur-xl pointer-events-none"></div>
                    <div className="break-words relative z-10">
                      <span className="block text-2xl sm:text-3xl font-black text-forest mb-0.5 sm:mb-1 tracking-tight">-15<span className="text-lg sm:text-xl">h</span></span>
                      <span className="block text-[10px] sm:text-[11px] font-bold text-forest/60 uppercase tracking-wider leading-tight mt-1">Admin / Sem.</span>
                    </div>
                    <div className="break-words relative z-10">
                      <span className="block text-2xl sm:text-3xl font-black text-forest mb-0.5 sm:mb-1 tracking-tight">100<span className="text-lg sm:text-xl">%</span></span>
                      <span className="block text-[10px] sm:text-[11px] font-bold text-forest/60 uppercase tracking-wider leading-tight mt-1">Fiabilité</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Carte 2 */}
            <motion.div {...fadeInOptions} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(6,78,59,0.05)] rounded-3xl p-6 sm:p-7 lg:p-8 hover:bg-white/50 hover:border-white/80 hover:shadow-[0_16px_48px_rgba(6,78,59,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="mb-5 sm:mb-6 relative z-10">
                <span className="inline-block px-3 py-1 bg-forest/5 text-forest/70 text-xs font-bold rounded-full mb-3 sm:mb-4 uppercase tracking-wide">
                  Fondation Inclusion
                </span>
                <h3 className="text-lg sm:text-xl font-bold leading-tight">Accessibilité & Orientation IA</h3>
              </div>
              <div className="flex flex-col gap-4 sm:gap-5 flex-grow">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-forest/50 uppercase tracking-wide mb-1">Besoin</h4>
                  <p className="text-forest/80 text-sm sm:text-base leading-relaxed">Qualifier et orienter les demandes des bénéficiaires en continu.</p>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-forest/50 uppercase tracking-wide mb-1">Solution envisagée</h4>
                  <p className="text-forest/80 text-sm sm:text-base leading-relaxed">Assistant basé sur Gemini configuré pour l'accueil et le guichet unique.</p>
                </div>
                <div className="mt-auto pt-3 sm:pt-4 relative z-10">
                  <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_8px_32px_rgba(6,78,59,0.06)] rounded-2xl p-4 sm:p-5 grid grid-cols-2 gap-3 sm:gap-4 relative overflow-hidden group-hover:bg-white/80 transition-colors duration-300">
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-electric/10 rounded-full blur-xl pointer-events-none"></div>
                    <div className="break-words relative z-10">
                      <span className="block text-2xl sm:text-3xl font-black text-forest mb-0.5 sm:mb-1 tracking-tight">/3</span>
                      <span className="block text-[10px] sm:text-[11px] font-bold text-forest/60 uppercase tracking-wider leading-tight mt-1">Tps. réponse</span>
                    </div>
                    <div className="break-words relative z-10">
                      <span className="block text-2xl sm:text-3xl font-black text-forest mb-0.5 sm:mb-1 tracking-tight">24<span className="text-lg sm:text-xl">/7</span></span>
                      <span className="block text-[10px] sm:text-[11px] font-bold text-forest/60 uppercase tracking-wider leading-tight mt-1">Disponibilité</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Carte 3 */}
            <motion.div {...fadeInOptions} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(6,78,59,0.05)] rounded-3xl p-6 sm:p-7 lg:p-8 hover:bg-white/50 hover:border-white/80 hover:shadow-[0_16px_48px_rgba(6,78,59,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="mb-5 sm:mb-6 relative z-10">
                <span className="inline-block px-3 py-1 bg-forest/5 text-forest/70 text-xs font-bold rounded-full mb-3 sm:mb-4 uppercase tracking-wide">
                  Collectif Green Action
                </span>
                <h3 className="text-lg sm:text-xl font-bold leading-tight">Digitalisation gestion bénévoles</h3>
              </div>
              <div className="flex flex-col gap-4 sm:gap-5 flex-grow">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-forest/50 uppercase tracking-wide mb-1">Besoin</h4>
                  <p className="text-forest/80 text-sm sm:text-base leading-relaxed">Coordonner les plannings et les missions sans gestion manuelle lourde.</p>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-forest/50 uppercase tracking-wide mb-1">Solution envisagée</h4>
                  <p className="text-forest/80 text-sm sm:text-base leading-relaxed">Plateforme de gestion sur mesure bâtie avec des briques No-Code.</p>
                </div>
                <div className="mt-auto pt-3 sm:pt-4 relative z-10">
                  <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_8px_32px_rgba(6,78,59,0.06)] rounded-2xl p-4 sm:p-5 grid grid-cols-2 gap-3 sm:gap-4 relative overflow-hidden group-hover:bg-white/80 transition-colors duration-300">
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-electric/10 rounded-full blur-xl pointer-events-none"></div>
                    <div className="break-words relative z-10">
                      <span className="block text-2xl sm:text-3xl font-black text-forest mb-0.5 sm:mb-1 tracking-tight">+60<span className="text-lg sm:text-xl">%</span></span>
                      <span className="block text-[10px] sm:text-[11px] font-bold text-forest/60 uppercase tracking-wider leading-tight mt-1">Engagement</span>
                    </div>
                    <div className="break-words relative z-10">
                      <span className="block text-2xl sm:text-3xl font-black text-forest mb-0.5 sm:mb-1 tracking-tight">0</span>
                      <span className="block text-[10px] sm:text-[11px] font-bold text-forest/60 uppercase tracking-wider leading-tight mt-1">Saisie manuelle</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Section Nos engagements */}
      <section id="engagements" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2 {...fadeInOptions} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-forest">Nos Engagements</motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div {...fadeInOptions}>
            <h3 className="text-base sm:text-lg font-bold text-forest/60 uppercase tracking-wide mb-6 text-center sm:text-left">Secteurs accompagnés</h3>
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 md:mb-12 justify-center sm:justify-start">
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-forest/5 flex items-center justify-center text-forest">
                  <Leaf size={28} className="sm:w-8 sm:h-8" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-center">Énergie<br/>propre</span>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-forest/5 flex items-center justify-center text-forest">
                  <Recycle size={28} className="sm:w-8 sm:h-8" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-center">Économie<br/>circulaire</span>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-forest/5 flex items-center justify-center text-forest">
                  <HeartHandshake size={28} className="sm:w-8 sm:h-8" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-center">Insertion<br/>sociale</span>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInOptions} transition={{ duration: 0.6, delay: 0.2 }} className="bg-forest/5 rounded-3xl p-6 sm:p-8 border border-forest/10">
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2 className="text-electric flex-shrink-0 mt-1" size={20} aria-hidden="true" />
                <span className="text-base sm:text-lg font-medium">Outils adaptés aux besoins réels et proportionnés</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2 className="text-electric flex-shrink-0 mt-1" size={20} aria-hidden="true" />
                <span className="text-base sm:text-lg font-medium">Sobriété numérique dans les choix d'architecture</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2 className="text-electric flex-shrink-0 mt-1" size={20} aria-hidden="true" />
                <span className="text-base sm:text-lg font-medium">Attention portée à l'accessibilité des interfaces</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2 className="text-electric flex-shrink-0 mt-1" size={20} aria-hidden="true" />
                <span className="text-base sm:text-lg font-medium">Accompagnement de vos équipes vers l'autonomie totale</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 8. Section Processus en 3 étapes */}
      <section id="methode" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div {...fadeInOptions} className="bg-forest rounded-3xl p-6 sm:p-10 md:p-16 text-offwhite">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Notre Méthode</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-8 left-16 right-16 h-px bg-offwhite/20 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-electric text-white font-bold text-xl sm:text-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-electric/30">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Audit</h3>
              <p className="text-offwhite/80 text-sm sm:text-base leading-relaxed">Diagnostic offert de 30 min pour cadrer votre besoin et évaluer la faisabilité technique.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center mt-6 md:mt-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-offwhite text-forest font-bold text-xl sm:text-2xl flex items-center justify-center mb-4 sm:mb-6 border border-offwhite/20">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Prototypage rapide</h3>
              <p className="text-offwhite/80 text-sm sm:text-base leading-relaxed">Création d'une V1 fonctionnelle en quelques jours pour tester votre concept sur le terrain.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center mt-6 md:mt-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-offwhite text-forest font-bold text-xl sm:text-2xl flex items-center justify-center mb-4 sm:mb-6 border border-offwhite/20">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Scale</h3>
              <p className="text-offwhite/80 text-sm sm:text-base leading-relaxed">Itération, automatisation avancée et formation de vos équipes pour un passage à l'échelle pérenne.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
