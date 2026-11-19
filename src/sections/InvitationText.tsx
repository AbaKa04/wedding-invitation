import { Heart } from 'lucide-react';
import Reveal from '../components/Reveal';
import useTilt from '../hooks/useTilt';
import { CONFIG } from '../config';
import { Translation } from '../translations';

export default function InvitationText({ t }: { t: Translation }) {
  const tilt = useTilt(7);

  return (
    <section className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="mb-12 text-center font-body text-xs uppercase tracking-[0.4em] text-gold">
            {t.invite.kicker}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            ref={tilt.ref}
            style={tilt.style}
            className="rounded-lg bg-white/50 p-10 shadow-card backdrop-blur-md md:p-14 will-change-transform"
          >
            <div className="flex justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-ivory/70">
                <Heart className="h-5 w-5 text-gold" strokeWidth={1.5} />
              </span>
            </div>
            <p className="mt-8 text-center font-display text-2xl leading-snug text-charcoal md:text-[1.7rem]">
              {t.invite.title}
            </p>
            <p className="mt-6 text-center font-body text-base font-light leading-[1.9] text-charcoal/80 md:text-lg">
              {t.invite.text}
            </p>
            <p className="mt-8 text-center font-display text-2xl italic text-charcoal md:text-[1.7rem]">
              {CONFIG.couple.groom} <span className="text-gold">&amp;</span> {CONFIG.couple.bride}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}