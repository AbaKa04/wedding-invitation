import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SilkBackground from './components/SilkBackground';
import LanguageSelect from './components/LanguageSelect';
import VideoIntro from './components/VideoIntro';
import Hero from './sections/Hero';
import InvitationText from './sections/InvitationText';
import Countdown from './sections/Countdown';
import Venue from './sections/Venue';
import DressCode from './sections/DressCode';
import Rsvp from './sections/Rsvp';
import Footer from './sections/Footer';
import { Language, TRANSLATIONS } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language | null>(null);
  const [opened, setOpened] = useState(false);
  const [ready, setReady] = useState(false);
  
  // Ссылка на аудио, чтобы оно жило на уровне всего приложения
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.body.style.overflow = ready ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [ready]);

  if (!lang) {
    return <LanguageSelect onSelect={setLang} />;
  }

  const t = TRANSLATIONS[lang];

  // Функция запуска музыки (вызывается при клике на "Нажмите")
  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0;
      audioRef.current.play().catch((e) => console.log('Audio blocked:', e));
      
      // Плавное увеличение громкости за 3 секунды
      let vol = 0;
      const fadeIn = setInterval(() => {
        if (!audioRef.current) return;
        vol += 0.05;
        if (vol >= 1) {
          audioRef.current.volume = 1;
          clearInterval(fadeIn);
        } else {
          audioRef.current.volume = vol;
        }
      }, 150);
    }
  };

  const finishIntro = () => {
    setOpened(true);
    window.setTimeout(() => setReady(true), 350);
  };

  return (
    <>
      {/* ГЛОБАЛЬНЫЙ АУДИОПЛЕЕР (играет бесконечно) */}
      <audio ref={audioRef} src="/aud.mp3" loop />

      <SilkBackground />

      {!opened && (
        <VideoIntro 
          onFinish={finishIntro} 
          t={t} 
          onStartMusic={startMusic} // Передаем функцию запуска музыки
        />
      )}

      <main className="relative z-10">
        <div className="relative">
          <motion.div style={{ willChange: 'transform' }} className="relative">
            <Hero t={t} />
          </motion.div>
          <ParallaxLayer speed={20}>
            <InvitationText t={t} />
          </ParallaxLayer>
          <ParallaxLayer speed={-12}>
            <Countdown t={t} />
          </ParallaxLayer>
          <ParallaxLayer speed={18}>
            <Venue t={t} />
          </ParallaxLayer>
          <ParallaxLayer speed={-14}>
            <DressCode t={t} />
          </ParallaxLayer>
          <ParallaxLayer speed={-10}>
            <Rsvp t={t} lang={lang} />
          </ParallaxLayer>
          <Footer t={t} />
        </div>
      </main>
    </>
  );
}

function ParallaxLayer({
  children,
  speed,
}: {
  children: React.ReactNode;
  speed: number;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 6000], [0, speed * 2]);

  return (
    <motion.div style={{ y }} className="relative will-change-transform">
      {children}
    </motion.div>
  );
}