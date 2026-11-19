import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CONFIG } from '../config';

const ENVELOPE_IMAGE = '/photo_2026-11-19_19-11-51.jpg';

export default function EnvelopeIntro({ onFinish }: { onFinish: () => void }) {
  const [opening, setOpening] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(() => setHidden(true), 2350);
    window.setTimeout(onFinish, 2850);
  };

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          className="envelope-intro fixed inset-0 z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.025 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleOpen}
          role="button"
          tabIndex={0}
          aria-label="Открыть приглашение"
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') handleOpen();
          }}
          style={{ cursor: opening ? 'default' : 'pointer' }}
        >
          <div
            aria-hidden="true"
            className={`envelope-backdrop absolute inset-0 ${opening ? 'is-opening' : ''}`}
            style={{ backgroundImage: `url(${ENVELOPE_IMAGE})` }}
          />
          <div aria-hidden="true" className="envelope-tint absolute inset-0" />

          <motion.div
            aria-hidden="true"
            className="opening-stage pointer-events-none absolute inset-0 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: opening ? 1 : 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="opening-flap-shell">
              <motion.div
                className="opening-flap"
                initial={{ rotateX: 0, opacity: 0 }}
                animate={{
                  rotateX: opening ? 178 : 0,
                  opacity: opening ? 1 : 0,
                }}
                transition={{
                  rotateX: { duration: 1.15, delay: 0.12, ease: [0.65, 0, 0.35, 1] },
                  opacity: { duration: 0.25 },
                }}
              />
            </div>

            <div className="opening-card-shell">
              <motion.div
                className="opening-card"
                initial={{ opacity: 0, y: '18%', scale: 0.88 }}
                animate={{
                  opacity: opening ? 1 : 0,
                  y: opening ? '-8%' : '18%',
                  scale: opening ? 1 : 0.88,
                }}
                transition={{
                  duration: 1.05,
                  delay: 0.62,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="opening-card-monogram">Б &amp; А</span>
                <span className="opening-card-rule" />
                <span className="opening-card-names">{CONFIG.couple.names}</span>
                <span className="opening-card-date">{CONFIG.date.display}</span>
              </motion.div>
            </div>

            <motion.div
              className="opening-seal-flash"
              initial={{ opacity: 0, scale: 1 }}
              animate={
                opening
                  ? { opacity: [0, 0.9, 0], scale: [1, 0.78, 1.35] }
                  : { opacity: 0, scale: 1 }
              }
              transition={{ duration: 0.85, ease: 'easeOut' }}
            />
          </motion.div>

          <div className="relative z-10 flex min-h-full flex-col items-center justify-between px-5 py-10 text-center sm:py-12 md:py-14">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: opening ? 0 : 1, y: opening ? -12 : 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative z-30 max-w-[19rem] pt-1 sm:max-w-none"
            >
              <p className="font-body text-[0.62rem] uppercase tracking-[0.34em] text-charcoal/75 sm:text-xs md:text-sm md:tracking-[0.45em]">
                Приглашение на свадьбу
              </p>
              <span className="mx-auto mt-4 block h-px w-16 bg-gold/70" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{
                opacity: opening ? 0.22 : 1,
                scale: opening ? 1.045 : 1,
                y: opening ? -8 : 0,
              }}
              transition={{ duration: opening ? 1.9 : 1.05, delay: opening ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="envelope-photo-frame pointer-events-none absolute inset-0 z-0 overflow-hidden"
            >
              <img
                src={ENVELOPE_IMAGE}
                alt={`Конверт с приглашением ${CONFIG.couple.names}`}
                className="envelope-photo block h-full w-full object-cover md:object-contain"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/55" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4a3f35]/[0.07] via-transparent to-white/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: opening ? 0 : 1, y: opening ? 12 : 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="relative z-30 flex flex-col items-center pb-1"
            >
              <span className="font-display text-lg italic text-charcoal/75 sm:text-xl">
                {CONFIG.couple.names}
              </span>
              <div className="mt-5 flex items-center gap-2 font-body text-[0.62rem] uppercase tracking-[0.32em] text-charcoal/65 sm:text-xs">
                <span>Нажмите, чтобы открыть</span>
                <ChevronDown className="h-4 w-4 text-gold" />
              </div>
            </motion.div>
          </div>

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 bg-ivory"
            initial={{ opacity: 0 }}
            animate={{ opacity: opening ? 0.72 : 0 }}
            transition={{ duration: 2.1, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
