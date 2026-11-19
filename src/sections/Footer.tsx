import { CONFIG } from '../config';
import { Translation } from '../translations';

export default function Footer({ t }: { t: Translation }) {
  return (
    <footer className="relative px-6 pb-16 pt-8 text-center">
      <div className="mx-auto flex max-w-md flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-white/60 shadow-soft backdrop-blur-sm">
          <span className="font-display text-lg font-semibold text-gold">
            {CONFIG.couple.monogram}
          </span>
        </div>
        <p className="mt-6 font-display text-3xl text-charcoal">
          {CONFIG.couple.names}
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
        </div>
        <p className="mt-4 font-body text-sm uppercase tracking-[0.3em] text-charcoal/60">
          {CONFIG.date.display}
        </p>
        <p className="mt-8 font-body font-light italic leading-relaxed text-charcoal/70">
          {t.footer.text}
        </p>
        <p className="mt-10 font-body text-[0.6rem] uppercase tracking-[0.35em] text-charcoal/40">
          {t.footer.from} {CONFIG.couple.groom} & {CONFIG.couple.bride}
        </p>
      </div>
    </footer>
  );
}