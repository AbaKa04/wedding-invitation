import { motion } from 'framer-motion';
import { Language } from '../translations';

export default function LanguageSelect({ onSelect }: { onSelect: (lang: Language) => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col overflow-hidden">
      
      {/* ФОНОВОЕ ФОТО */}
      <img
        src="/Lang_selector.jpg"
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Легкое затемнение для контраста */}
      <div className="absolute inset-0 bg-black/20" />

      {/* ОСНОВНОЙ КОНТЕНТ (по центру экрана) */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12">
        
        {/* ЗАГОЛОВКИ И КНОПКИ */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full max-w-sm flex-col items-center"
        >
          <div className="text-center font-display text-white drop-shadow-md">
            <h1 className="text-3xl tracking-widest uppercase md:text-4xl">
              Тилди тандаңыз
            </h1>
            <h2 className="mt-3 text-xl tracking-widest uppercase md:text-2xl text-white/90">
              Выберите язык
            </h2>
          </div>

          <div className="mt-12 flex w-full flex-col gap-4">
            <button
              onClick={() => onSelect('kg')}
              className="w-full rounded-full bg-white/95 px-8 py-4 font-display text-xl text-[#5A0000] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white md:text-2xl"
            >
              Кыргыз тили
            </button>
            
            <button
              onClick={() => onSelect('ru')}
              className="w-full rounded-full bg-white/95 px-8 py-4 font-display text-xl text-[#5A0000] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white md:text-2xl"
            >
              Русский язык
            </button>
          </div>
        </motion.div>

        {/* НИЖНЯЯ ЧАСТЬ (Дизайн: Вензель, Имена, Дата) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="mt-20 flex flex-col items-center text-white drop-shadow-md"
        >
          {/* Декоративные веточки + Инициалы */}
          <div className="mb-5 flex items-center gap-4 opacity-90">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 10 H10 M10 10 C10 5 5 5 2 8 C5 11 10 11 10 10 Z" stroke="currentColor" strokeWidth="1" />
              <circle cx="10" cy="10" r="1.5" fill="currentColor" />
            </svg>
            <span className="font-display text-2xl tracking-[0.2em] text-[#E8DCC3]">
              B &amp; A
            </span>
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
              <path d="M40 10 H10 M10 10 C10 5 5 5 2 8 C5 11 10 11 10 10 Z" stroke="currentColor" strokeWidth="1" />
              <circle cx="10" cy="10" r="1.5" fill="currentColor" />
            </svg>
          </div>

          {/* Имена */}
          <p className="font-display text-3xl md:text-4xl tracking-widest uppercase">
            Бекназар &amp; Аруа
          </p>

          {/* Дата */}
          <p className="mt-3 font-body text-xs md:text-sm tracking-[0.3em] text-white/90 uppercase">
            06 • 12 • 2026
          </p>
        </motion.div>
      </div>
    </div>
  );
}