import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { Translation } from '../translations';

function SuitIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M15 20 L40 10 H60 L85 20 L50 95 Z" fill="#5A0000" />
      <path d="M40 10 L50 35 L60 10 Z" fill="#FFFFFF" />
      <path d="M45 30 L50 35 L55 30 L52 50 L50 60 L48 50 Z" fill="#E8E8E8" />
      <path d="M40 10 L50 35 L48 50 L38 20 Z" fill="#F0F0F0" />
      <path d="M60 10 L50 35 L52 50 L62 20 Z" fill="#F0F0F0" />
    </svg>
  );
}

function DressIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path 
        d="M40 10 C40 20 45 30 45 40 C45 55 35 75 25 90 C40 95 60 95 75 90 C65 75 55 55 55 40 C55 30 60 20 60 10 Z" 
        fill="#5A0000" 
      />
      <path d="M40 10 C45 20 55 20 60 10 Z" fill="#5A0000" />
    </svg>
  );
}

export default function DressCode({ t }: { t: Translation }) {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading kicker={t.dresscode.kicker} title={t.dresscode.title} />

        <Reveal delay={0.1}>
          <p className="mx-auto max-w-xl font-body text-base font-light leading-[1.9] text-charcoal/80 md:text-lg">
            {t.dresscode.text}
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12 flex items-center justify-center gap-16 md:gap-24">
            
            <div className="group flex flex-col items-center">
              <SuitIcon className="h-28 w-28 md:h-32 md:w-32 drop-shadow-md transition-transform duration-300 group-hover:scale-110" />
              <span className="mt-4 font-body text-sm uppercase tracking-[0.2em] text-charcoal/70">
                {t.dresscode.men}
              </span>
            </div>

            <div className="group flex flex-col items-center">
              <DressIcon className="h-28 w-28 md:h-32 md:w-32 drop-shadow-md transition-transform duration-300 group-hover:scale-110" />
              <span className="mt-4 font-body text-sm uppercase tracking-[0.2em] text-charcoal/70">
                {t.dresscode.women}
              </span>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}