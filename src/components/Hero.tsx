import React, { useRef, useState } from 'react';
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-forest max-w-4xl leading-tight mb-6 text-balance"
      >
        Accélérez votre impact grâce au{' '}
        <span className="whitespace-nowrap bg-gradient-to-r from-blue-950 via-blue-900 to-electric bg-clip-text text-transparent font-extrabold">
          No-Code
        </span>{' '}
        et à l'
        <span className="bg-gradient-to-r from-blue-950 via-blue-900 to-electric bg-clip-text text-transparent font-extrabold">
          IA
        </span>
        .
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-forest/5 border border-forest/10 text-forest/80 text-xs sm:text-sm font-medium mb-8 sm:mb-10 max-w-full text-center no-underline"
      >
        <span className="w-2 h-2 rounded-full bg-electric flex-shrink-0 animate-pulse"></span>
        <span>Tech For Good & Conseil en transformation digitale</span>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-forest/70 max-w-2xl mb-8 sm:mb-10 leading-relaxed"
      >
        Nous sommes un collectif de freelances experts en No-Code et IA. 
        Notre mission : accompagner les startups de l'Économie Sociale et Solidaire 
        pour démultiplier leur impact grâce à des solutions sur-mesure, agiles et accessibles.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-14 md:mb-24 justify-center"
      >
        <a 
          href="#contact" 
          className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-blue-950 via-blue-900 to-electric text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 transition-all font-semibold text-base sm:text-lg w-full sm:w-auto shadow-lg shadow-blue-950/25 hover:shadow-blue-950/35 no-underline group"
        >
          Demander mon diagnostic offert
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1 flex-shrink-0" />
        </a>
      </motion.div>

      {/* Video Showcase Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-5xl relative"
      >
        {/* Decorative background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-electric/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-forest/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

        {/* Glassmorphism Video Container */}
        <div className="relative rounded-3xl md:rounded-[32px] p-2 md:p-4 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_60px_rgba(6,78,59,0.15)] overflow-hidden group">
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
          
          <div className="relative rounded-2xl md:rounded-[24px] overflow-hidden bg-forest/5 aspect-video flex items-center justify-center">
            {/* 
              Placeholder Video 
              Replace the 'src' with your actual video URL. 
              Best practices: autoPlay, muted, loop, playsInline for a seamless hero video.
            */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            >
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>

            {/* Play/Pause Button Overlay */}
            <div 
              onClick={togglePlay}
              className={`absolute inset-0 flex items-center justify-center bg-forest/20 cursor-pointer transition-opacity duration-300 ${!isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
            >
              <button 
                type="button"
                onClick={togglePlay}
                className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/25 backdrop-blur-md border border-white/50 text-white shadow-xl hover:scale-110 transition-transform duration-300" 
                aria-label={isPlaying ? "Mettre en pause la vidéo" : "Lancer la vidéo"}
              >
                {isPlaying ? <Pause size={28} className="fill-current" /> : <Play size={32} className="ml-1 fill-current" />}
              </button>
            </div>

            {/* Audio Mute/Unmute toggle button in corner */}
            <button
              type="button"
              onClick={toggleMute}
              className="absolute bottom-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-forest/80 backdrop-blur-md border border-white/20 text-white shadow-md hover:bg-forest transition-colors"
              aria-label={isMuted ? "Activer le son" : "Couper le son"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
