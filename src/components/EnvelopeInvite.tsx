import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Sparkles, RotateCcw, Heart, Calendar, MapPin, Clock } from 'lucide-react';
import { INVITE_IMAGE_URL, WEDDING_INFO } from '../config/weddingConfig';

interface EnvelopeInviteProps {
  onOpenLightbox: () => void;
}

export const EnvelopeInvite: React.FC<EnvelopeInviteProps> = ({ onOpenLightbox }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleEnvelopeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isOpened) {
      setIsOpened(true);
    } else {
      // If already opened, clicking the letter area opens fullscreen lightbox
      onOpenLightbox();
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpened(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full my-6 select-none">
      {/* 3D Envelope Container */}
      <div className="relative w-[340px] sm:w-[420px] max-w-[92vw] aspect-[3/2.1] perspective-1000">
        <div
          id="wedding-envelope"
          role="button"
          tabIndex={0}
          aria-label={isOpened ? "Envelope aberto. Clique para ampliar o convite" : "Envelope de casamento. Clique para abrir o convite"}
          onClick={handleEnvelopeClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              if (!isOpened) setIsOpened(true);
              else onOpenLightbox();
            }
          }}
          className={`relative w-full h-full cursor-pointer transform-style-3d transition-transform duration-500 focus:outline-none focus:ring-4 focus:ring-[#8B4F49]/40 rounded-sm ${
            !isOpened ? 'hover:-translate-y-1 active:scale-[0.99]' : ''
          }`}
        >
          {/* Subtle Ambient Shadow beneath envelope */}
          <div
            className={`absolute -bottom-4 left-[8%] right-[8%] h-7 rounded-full bg-[#232E24]/20 blur-md transition-all duration-700 pointer-events-none ${
              isOpened ? 'scale-110 opacity-60' : 'opacity-40'
            }`}
          />

          {/* Envelope Back Plate */}
          <div className="absolute inset-0 bg-[#E8DCBF] border border-[#232E24]/15 rounded-sm shadow-xl overflow-hidden">
            {/* Textured paper sheen */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F7EFE0] via-[#EFE6D2] to-[#DFD0B0] opacity-90" />
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#232E24_1px,transparent_1px)] [background-size:12px_12px]" />
          </div>

          {/* LETTER CARD (O CONVITE) 
              CRITICAL FIX: 
              - When closed: strictly nested inside, image hidden with opacity: 0 and visibility hidden.
              - When opened: slides up with translation and image reveals smoothly with fade + soft scale! */}
          <div
            id="invitation-letter"
            className={`absolute left-[5%] right-[5%] top-[6%] h-[88%] bg-[#FCFBF7] border border-[#232E24]/15 rounded-sm shadow-md transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden ${
              isOpened
                ? 'z-30 -translate-y-[52%] sm:-translate-y-[56%] scale-[1.05] shadow-2xl cursor-zoom-in'
                : 'z-10 translate-y-[8%] scale-[0.97] pointer-events-none'
            }`}
          >
            {/* Smooth Revealing Invitation Content */}
            <div className="relative w-full h-full flex flex-col items-center justify-between p-3.5 sm:p-5 text-center bg-gradient-to-b from-[#FFFDF9] via-[#FAF6ED] to-[#F5EFE0]">
              {/* If developer provided INVITE_IMAGE_URL */}
              {INVITE_IMAGE_URL ? (
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[2px]">
                  {/* Subtle Loading / Artistic Background */}
                  <div className="absolute inset-0 bg-[#EFE6D2]/60 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#8B4F49]/40 animate-pulse" />
                  </div>

                  {/* The Image with smooth reveal animation */}
                  <img
                    id="envelope-invite-img"
                    src={INVITE_IMAGE_URL}
                    alt="Convite Oficial de Casamento"
                    referrerPolicy="no-referrer"
                    className={`absolute inset-0 w-full h-full object-cover rounded-[2px] transition-all duration-1000 ease-out ${
                      isOpened
                        ? 'opacity-100 scale-100 blur-0 delay-300'
                        : 'opacity-0 scale-105 blur-sm pointer-events-none'
                    }`}
                  />

                  {/* Gentle hover overlay banner hint when opened */}
                  {isOpened && (
                    <div className="absolute bottom-2 left-2 right-2 py-1 px-2 bg-[#232E24]/75 backdrop-blur-sm rounded text-white text-[11px] font-sans flex items-center justify-center gap-1.5 opacity-90 shadow-sm">
                      <Maximize2 className="w-3 h-3 text-[#EADFC7]" />
                      <span>Clique para ver em tela cheia</span>
                    </div>
                  )}
                </div>
              ) : (
                /* Elegant Calligraphic Fallback Card (when INVITE_IMAGE_URL is "") */
                <div
                  className={`w-full h-full flex flex-col justify-between items-center py-2 transition-all duration-1000 ${
                    isOpened ? 'opacity-100 delay-300 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[#8B4F49] text-xs font-serif italic tracking-wider">
                    <span>— convite de casamento —</span>
                  </div>

                  <div className="my-auto">
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#232E24] font-normal leading-tight">
                      {WEDDING_INFO.brideName} <span className="italic text-[#8B4F49] font-light">&amp;</span> {WEDDING_INFO.groomName}
                    </h2>
                    <div className="w-10 h-[1px] bg-[#A8853E] mx-auto my-2 opacity-60" />
                    <p className="text-[12px] sm:text-xs text-[#5C7259] uppercase tracking-widest font-sans font-medium">
                      {WEDDING_INFO.dateDisplay}
                    </p>
                  </div>

                  <div className="w-full flex items-center justify-center gap-4 text-[11px] text-[#232E24]/75 border-t border-[#232E24]/10 pt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#8B4F49]" /> {WEDDING_INFO.timeDisplay}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#5C7259]" /> {WEDDING_INFO.locationName}
                    </span>
                  </div>

                  {isOpened && (
                    <div className="mt-1 text-[10px] text-[#8B4F49] underline decoration-[#8B4F49]/40 underline-offset-2 flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" /> Toque para abrir detalhes
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Envelope Pocket (Front Side & Bottom Folds) */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-sm">
            {/* Left triangle fold */}
            <div
              className="absolute bottom-0 left-0 w-0 h-0"
              style={{
                borderStyle: 'solid',
                borderWidth: '0 0 110px 170px',
                borderColor: 'transparent transparent #E5D7B5 transparent',
                filter: 'drop-shadow(2px 0 3px rgba(35,46,36,0.08))',
              }}
            />
            {/* Right triangle fold */}
            <div
              className="absolute bottom-0 right-0 w-0 h-0"
              style={{
                borderStyle: 'solid',
                borderWidth: '0 170px 110px 0',
                borderColor: 'transparent transparent #DFD0AC transparent',
                filter: 'drop-shadow(-2px 0 3px rgba(35,46,36,0.08))',
              }}
            />
            {/* Bottom triangle fold */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[62%]"
              style={{
                clipPath: 'polygon(0 100%, 100% 100%, 50% 28%)',
                background: 'linear-gradient(180deg, #DBC9A1 0%, #D4BF93 100%)',
                boxShadow: '0 -2px 10px rgba(35,46,36,0.06)',
              }}
            />
          </div>

          {/* Top Flap with 3D Folding Animation */}
          <div
            className={`absolute top-0 left-0 right-0 h-[58%] z-40 transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] origin-top rounded-t-sm shadow-md ${
              isOpened
                ? '-rotate-x-180 pointer-events-none z-0'
                : 'rotate-x-0'
            }`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 92%)',
              background: 'linear-gradient(160deg, #F0E5CB 0%, #E2D3AD 65%, #DAC89E 100%)',
              borderBottom: '1px solid rgba(35,46,36,0.12)',
            }}
          />

          {/* Classic Wax Seal Stamp */}
          <div
            className={`absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-700 ease-out ${
              isOpened
                ? 'opacity-0 scale-50 rotate-45 pointer-events-none'
                : 'opacity-100 scale-100 shadow-lg'
            }`}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#A95C53] via-[#8B4F49] to-[#68332F] flex items-center justify-center text-[#F9EFE4] font-serif italic text-sm sm:text-base border-2 border-[#D89389]/40 shadow-[0_4px_12px_rgba(104,51,47,0.45)]">
              <span className="drop-shadow-sm font-semibold tracking-wider">H&M</span>
            </div>
          </div>

          {/* Floating Hearts Animation when opening */}
          {isOpened && (
            <div className="absolute inset-0 z-50 pointer-events-none overflow-visible">
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.5, x: -30 }}
                animate={{ opacity: [0, 1, 0], y: -90, scale: 1.1, x: -50 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                className="absolute top-1/4 left-1/4 text-[#8B4F49]"
              >
                <Heart className="w-5 h-5 fill-current" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.5, x: 0 }}
                animate={{ opacity: [0, 1, 0], y: -120, scale: 1.3, x: 10 }}
                transition={{ duration: 1.8, delay: 0.15, ease: "easeOut" }}
                className="absolute top-1/6 left-1/2 text-[#A8853E]"
              >
                <Sparkles className="w-6 h-6 fill-current" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.5, x: 30 }}
                animate={{ opacity: [0, 1, 0], y: -80, scale: 1, x: 60 }}
                transition={{ duration: 1.5, delay: 0.25, ease: "easeOut" }}
                className="absolute top-1/4 right-1/4 text-[#8B4F49]"
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Helper Action Buttons Below Envelope */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
        {!isOpened ? (
          <button
            id="btn-open-envelope"
            onClick={() => setIsOpened(true)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#8B4F49] text-[#FCFBF7] font-sans text-sm font-medium hover:bg-[#743F3A] active:scale-95 transition-all shadow-md hover:shadow-lg animate-bounce"
          >
            <Heart className="w-4 h-4 fill-current text-[#F9DFD8]" />
            <span>Toque no envelope para abrir o convite</span>
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <button
              id="btn-view-invite-large"
              onClick={onOpenLightbox}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2C3529] text-[#FCFBF7] font-sans text-xs sm:text-sm font-medium hover:bg-[#1E251C] transition-all shadow"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#EADFC7]" />
              <span>Ver convite em tela cheia</span>
            </button>
            <button
              id="btn-reclose-envelope"
              onClick={handleReset}
              title="Fechar envelope novamente"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#2C3529]/20 bg-white/70 text-[#2C3529] font-sans text-xs sm:text-sm hover:bg-white transition-all shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#5C7259]" />
              <span>Fechar envelope</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
