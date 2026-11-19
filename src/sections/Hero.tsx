import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CONFIG } from '../config';
import { Translation } from '../translations';

function FloralCorner({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className={`pointer-events-none absolute h-20 w-20 md:h-28 md:w-28 text-gold/60 ${className}`}>
      <path d="M4 60 C4 28 28 4 60 4" stroke="currentColor" strokeWidth="1" />
      <path d="M12 60 C12 34 34 12 60 12" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
      <circle cx="60" cy="4" r="2.2" fill="currentColor" />
      <circle cx="4" cy="60" r="2.2" fill="currentColor" />
      <path d="M18 30 C26 30 30 34 30 42 C22 42 18 38 18 30 Z" fill="currentColor" opacity="0.5" />
      <path d="M30 18 C30 26 26 30 18 30 C18 22 22 18 30 18 Z" fill="currentColor" opacity="0.35" />
      <circle cx="34" cy="34" r="1.6" fill="currentColor" opacity="0.8" />
      <path d="M40 12 C42 18 40 22 34 24 C34 18 36 14 40 12 Z" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export default function Hero({ t }: { t: Translation }) {
  return (
    <section className="relative flex min-h-screen flex-col px-6 pt-6 pb-20 md:pt-12 md:pb-28">
      
      <FloralCorner className="left-2 top-20 md:left-10 md:top-24" />
      <FloralCorner className="right-2 top-20 rotate-90 md:right-10 md:top-24" />
      <FloralCorner className="bottom-24 left-2 -rotate-90 md:bottom-28 md:left-10" />
      <FloralCorner className="bottom-24 right-2 rotate-180 md:bottom-28 md:right-10" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center">
        
        {/* КАРТИНА В САМОМ НАЧАЛЕ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-sm md:max-w-md lg:max-w-lg mb-10 md:mb-14"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-gold/20">
            <img
              src="Hands.jpg"
              alt="Бекназар и Аруа"
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>

        {/* ТЕКСТ ПОД КАРТИНОЙ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-center"
        >
          <div className="mb-8">
            <p className="font-body text-[0.65rem] md:text-xs uppercase tracking-[0.4em] text-charcoal/60">
              {t.hero.hosts}
            </p>
            <p className="mt-2 font-display text-2xl md:text-3xl text-gold">{CONFIG.couple.hosts}</p>
          </div>

          <div className="mx-auto mb-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="h-px w-12 bg-gold/40" />
          </div>

          <p className="font-body text-xs md:text-sm uppercase tracking-[0.45em] text-gold mb-6">
            {t.hero.invitation}
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] text-charcoal">
            {CONFIG.couple.groom}
            <span className="mx-3 inline-block text-gold md:mx-5">&amp;</span>
            {CONFIG.couple.bride}
          </h1>

          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/60" />
            <span className="h-2 w-2 rotate-45 bg-gold" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/60" />
          </div>

          <p className="mt-8 font-display text-2xl md:text-3xl italic text-charcoal/80">
            {CONFIG.date.display}
          </p>
          <p className="mt-4 font-body text-sm md:text-base font-light tracking-wide text-charcoal/60">
            {CONFIG.venue.name} · {CONFIG.venue.address}
          </p>
        </motion.div>
      </div>

      {/* ИНДИКАТОР СКРОЛЛА */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal/60"
      >
        <span className="font-body text-[0.65rem] uppercase tracking-[0.4em]">
          {t.hero.scroll}
        </span>
        <ChevronDown className="h-5 w-5 animate-scroll-hint text-gold" />
      </motion.div>
    </section>
  );
}