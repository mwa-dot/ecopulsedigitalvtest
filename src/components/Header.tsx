import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Close menu on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isOpen && !(e.target as Element).closest('#mobile-menu') && !(e.target as Element).closest('#burger-btn')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-forest/10 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" onClick={handleLinkClick} className="text-xl font-bold tracking-tight text-forest no-underline">
              EcoPulse <span className="text-electric">Digital</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            <a href="#stack" className="text-forest/80 hover:text-forest focus-visible:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded-md px-2 py-1 transition-colors font-medium no-underline text-sm xl:text-base">Expertise</a>
            <a href="#methode" className="text-forest/80 hover:text-forest focus-visible:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded-md px-2 py-1 transition-colors font-medium no-underline text-sm xl:text-base">Méthode</a>
            <a href="#portfolio" className="text-forest/80 hover:text-forest focus-visible:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded-md px-2 py-1 transition-colors font-medium no-underline text-sm xl:text-base">Réalisations</a>
            <a href="#engagements" className="text-forest/80 hover:text-forest focus-visible:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded-md px-2 py-1 transition-colors font-medium no-underline text-sm xl:text-base">Engagements</a>
            <a href="#presentation" className="text-forest/80 hover:text-forest focus-visible:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded-md px-2 py-1 transition-colors font-medium no-underline text-sm xl:text-base">À propos</a>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-950 via-blue-900 to-electric text-white hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 px-5 py-2.5 rounded-2xl transition-all font-semibold shadow-md shadow-blue-950/20 hover:shadow-blue-950/30 no-underline whitespace-nowrap text-sm xl:text-base"
            >
              Diagnostic offert
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button 
              id="burger-btn"
              onClick={() => setIsOpen(!isOpen)} 
              className="text-forest hover:text-electric focus:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded-md p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white/98 backdrop-blur-md border-b border-forest/10 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <a href="#stack" onClick={handleLinkClick} className="block px-3 py-3 rounded-xl text-forest/90 hover:bg-forest/5 focus-visible:bg-forest/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric font-medium no-underline">Expertise</a>
            <a href="#methode" onClick={handleLinkClick} className="block px-3 py-3 rounded-xl text-forest/90 hover:bg-forest/5 focus-visible:bg-forest/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric font-medium no-underline">Méthode</a>
            <a href="#portfolio" onClick={handleLinkClick} className="block px-3 py-3 rounded-xl text-forest/90 hover:bg-forest/5 focus-visible:bg-forest/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric font-medium no-underline">Réalisations</a>
            <a href="#engagements" onClick={handleLinkClick} className="block px-3 py-3 rounded-xl text-forest/90 hover:bg-forest/5 focus-visible:bg-forest/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric font-medium no-underline">Engagements</a>
            <a href="#presentation" onClick={handleLinkClick} className="block px-3 py-3 rounded-xl text-forest/90 hover:bg-forest/5 focus-visible:bg-forest/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric font-medium no-underline">À propos</a>
            <div className="pt-4">
              <a 
                href="#contact" 
                onClick={handleLinkClick}
                className="block text-center bg-gradient-to-r from-blue-950 via-blue-900 to-electric text-white hover:brightness-110 px-5 py-3 rounded-2xl transition-all font-semibold no-underline shadow-md shadow-blue-950/20"
              >
                Diagnostic offert
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
