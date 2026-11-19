import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translation } from '../translations';

const VIDEO_SRC = 'animation.mp4';
const POSTER_SRC = 'Invitation.jpg';

export default function VideoIntro({ 
  onFinish, 
  t, 
  onStartMusic 
}: { 
  onFinish: () => void, 
  t: Translation, 
  onStartMusic: () => void 
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [hidden, setHidden] = useState(false);

  const finish = () => {
    if (hidden) return;
    setHidden(true);
    window.setTimeout(onFinish, 700);
  };

  const handleStart = () => {
    if (started) return;
    setStarted(true);

    // Запускаем видео (без звука)
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(finish);
    }

    // Запускаем фоновую музыку (логика в App.tsx)
    onStartMusic();
  };

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* РАЗМЫТЫЙ ФОН */}
          <img
            src={POSTER_SRC}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover opacity-60 blur-2xl scale-110 transition-opacity duration-1000 ${started ? 'opacity-30' : 'opacity-60'}`}
          />
          <video
            className={`absolute inset-0 h-full w-full object-cover opacity-30 blur-2xl scale-110 transition-opacity duration-1000 ${started ? 'block' : 'hidden'}`}
            src={VIDEO_SRC}
            muted
            playsInline
          />

          {/* ФОТО-ПОСТЕР */}
          {!started && (
            <img
              src={POSTER_SRC}
              alt="Приглашение"
              className="absolute inset-0 z-10 h-full w-full object-contain"
            />
          )}

          {/* ОСНОВНОЕ ВИДЕО */}
          <video
            ref={videoRef}
            className={`absolute inset-0 z-10 h-full w-full object-contain ${started ? 'block' : 'hidden'}`}
            src={VIDEO_SRC}
            playsInline
            muted
            preload="auto"
            onEnded={finish}
            onError={finish}
          />

          <div className="pointer-events-none absolute inset-0 z-10 bg-black/10" />

          {/* ТЕКСТ ВНИЗУ ЭКРАНА */}
          {!started && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={handleStart}
              role="button"
              tabIndex={0}
              aria-label="Нажмите, чтобы открыть приглашение"
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') handleStart();
              }}
              className="absolute inset-0 z-20 flex cursor-pointer flex-col items-center justify-end pb-16 md:pb-24"
            >
              <motion.span
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="font-body text-xs font-medium uppercase tracking-[0.3em] text-white/90 md:text-sm"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
              >
                {t.intro.click}
              </motion.span>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}