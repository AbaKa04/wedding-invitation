import { Navigation, Clock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { CONFIG } from '../config';
import { Translation } from '../translations';

// Векторное здание (Элегантный особняк / Банкетный зал)
function BuildingSketch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Основной корпус */}
      <rect x="20" y="60" width="220" height="60" fill="#FAFAFA" stroke="#5A0000" strokeWidth="1" />
      
      {/* Центральная выступающая часть (ризалит) */}
      <rect x="80" y="40" width="100" height="80" fill="#FAFAFA" stroke="#5A0000" strokeWidth="1" />
      
      {/* Плоская крыша с балюстрадой (перилами) */}
      {/* Левая часть */}
      <rect x="20" y="55" width="220" height="5" fill="#FAFAFA" stroke="#5A0000" strokeWidth="1" />
      <path d="M25 55 V45 M35 55 V45 M45 55 V45 M55 55 V45 M65 55 V45 M75 55 V45" stroke="#5A0000" strokeWidth="0.8" />
      <path d="M20 45 H80" stroke="#5A0000" strokeWidth="1" />
      
      {/* Правая часть */}
      <path d="M180 55 V45 M190 55 V45 M200 55 V45 M210 55 V45 M220 55 V45 M230 55 V45" stroke="#5A0000" strokeWidth="0.8" />
      <path d="M180 45 H240" stroke="#5A0000" strokeWidth="1" />
      
      {/* Центральная крыша (повыше) */}
      <rect x="80" y="35" width="100" height="5" fill="#FAFAFA" stroke="#5A0000" strokeWidth="1" />
      <path d="M85 35 V25 M95 35 V25 M105 35 V25 M115 35 V25 M125 35 V25 M135 35 V25 M145 35 V25 M155 35 V25 M165 35 V25 M175 35 V25" stroke="#5A0000" strokeWidth="0.8" />
      <path d="M80 25 H180" stroke="#5A0000" strokeWidth="1" />

      {/* Декоративный герб/элемент на крыше по центру */}
      <path d="M125 25 L130 15 L135 25 Z" fill="#5A0000" opacity="0.6"/>

      {/* Колонны */}
      {/* Левое крыло */}
      <rect x="30" y="60" width="6" height="60" fill="#FAFAFA" stroke="#5A0000" strokeWidth="0.8" />
      <rect x="60" y="60" width="6" height="60" fill="#FAFAFA" stroke="#5A0000" strokeWidth="0.8" />
      {/* Правое крыло */}
      <rect x="194" y="60" width="6" height="60" fill="#FAFAFA" stroke="#5A0000" strokeWidth="0.8" />
      <rect x="224" y="60" width="6" height="60" fill="#FAFAFA" stroke="#5A0000" strokeWidth="0.8" />
      {/* Центральные колонны */}
      <rect x="90" y="40" width="6" height="80" fill="#FAFAFA" stroke="#5A0000" strokeWidth="0.8" />
      <rect x="164" y="40" width="6" height="80" fill="#FAFAFA" stroke="#5A0000" strokeWidth="0.8" />

      {/* Окна (1 этаж) */}
      {[40, 75, 105, 135, 170, 205].map(x => (
        <rect key={`w1-${x}`} x={x} y="75" width="12" height="30" fill="#FAFAFA" stroke="#5A0000" strokeWidth="0.8" />
      ))}
      
      {/* Окна (2 этаж) */}
      {[40, 75, 170, 205].map(x => (
        <rect key={`w2-${x}`} x={x} y="65" width="12" height="10" fill="#FAFAFA" stroke="#5A0000" strokeWidth="0.8" />
      ))}

      {/* Центральный вход (Широкая арка с двойными дверями) */}
      <path d="M105 120 V85 C105 75 155 75 155 85 V120" fill="#FAFAFA" stroke="#5A0000" strokeWidth="1" />
      {/* Двери */}
      <path d="M130 120 V85" stroke="#5A0000" strokeWidth="1" />
      <path d="M115 95 H145" stroke="#5A0000" strokeWidth="0.5" />
      <path d="M115 105 H145" stroke="#5A0000" strokeWidth="0.5" />
      {/* Ручки дверей */}
      <circle cx="125" cy="100" r="1.5" fill="#5A0000" />
      <circle cx="135" cy="100" r="1.5" fill="#5A0000" />

      {/* Балкон над входом */}
      <rect x="95" y="60" width="70" height="4" fill="#5A0000" />
      <path d="M95 64 V72 M110 64 V72 M125 64 V72 M140 64 V72 M155 64 V72 M165 64 V72" stroke="#5A0000" strokeWidth="0.8" />
      <path d="M95 72 H165" stroke="#5A0000" strokeWidth="0.8" />

      {/* Широкая лестница */}
      <rect x="85" y="120" width="90" height="5" fill="#FAFAFA" stroke="#5A0000" strokeWidth="1" />
      <rect x="75" y="125" width="110" height="5" fill="#FAFAFA" stroke="#5A0000" strokeWidth="1" />
      <rect x="65" y="130" width="130" height="5" fill="#FAFAFA" stroke="#5A0000" strokeWidth="1" />

      {/* Земля */}
      <path d="M10 135 H250" stroke="#5A0000" strokeWidth="1.5" />
    </svg>
  );
}

export default function Venue({ t }: { t: Translation }) {
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const dates = [30, 1, 2, 3, 4, 5, 6];
  const targetDay = 6;

  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
        <SectionHeading kicker={t.venue.kicker} title={t.venue.title} />

        {/* КАЛЕНДАРЬ */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-center">
            <h3 className="font-script text-5xl md:text-6xl text-[#5A0000] rotate-[-5deg]">
              Декабрь
            </h3>
            
            <div className="mt-6 flex items-center justify-center gap-2 md:gap-4">
              {weekDays.map((day, i) => (
                <div key={day} className="flex flex-col items-center w-8 md:w-12">
                  <span className="font-body text-xs md:text-sm text-charcoal/50 uppercase tracking-widest">
                    {day}
                  </span>
                  <span className={`mt-2 font-display text-lg md:text-2xl ${dates[i] === targetDay ? 'text-[#5A0000] font-bold' : 'text-charcoal/70'}`}>
                    {dates[i]}
                  </span>
                  {dates[i] === targetDay && (
                    <span className="mt-1 h-1 w-1 rotate-45 bg-[#5A0000]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* АДРЕС И ДАТА */}
        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-center">
            <h3 className="font-script text-4xl md:text-6xl text-[#5A0000] rotate-[-3deg]">
              {t.venue.addressTitle}
            </h3>

            <div className="mt-10 flex flex-col items-center gap-2">
              <p className="font-display text-2xl md:text-3xl text-charcoal">
                {CONFIG.venue.name}
              </p>
              <p className="font-body text-sm md:text-base font-light text-charcoal/70">
                {CONFIG.venue.address}
              </p>
            </div>

            {/* ВЕКТОРНОЕ ЗДАНИЕ (Дворец) */}
            <div className="mt-8 w-full max-w-lg px-4 opacity-80 mix-blend-multiply">
              <BuildingSketch className="w-full h-auto" />
            </div>

            {/* Время */}
            <div className="mt-10 flex items-center justify-center gap-6 text-charcoal/80">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#5A0000]" />
                <span className="font-display text-xl">15:00</span>
              </div>
            </div>

            {/* Кнопка карты */}
            <div className="mt-10">
              <a
                href={CONFIG.venue.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#5A0000]/30 bg-white/50 px-8 py-3 font-body text-xs uppercase tracking-[0.25em] text-[#5A0000] transition-all duration-300 hover:bg-[#5A0000] hover:text-white"
              >
                <Navigation className="h-4 w-4" />
                {t.venue.openMap}
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}