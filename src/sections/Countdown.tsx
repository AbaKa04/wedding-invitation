import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { CONFIG } from '../config';
import { Translation } from '../translations';

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function calc(): TimeLeft {
  const diff = new Date(CONFIG.date.iso).getTime() - Date.now();
  const clamp = Math.max(0, diff);
  return {
    days: Math.floor(clamp / 86400000),
    hours: Math.floor((clamp / 3600000) % 24),
    minutes: Math.floor((clamp / 60000) % 60),
    seconds: Math.floor((clamp / 1000) % 60),
  };
}

function plural(n: number, forms: [string, string, string]) {
  const n10 = n % 10;
  const n100 = n % 100;
  if (n10 === 1 && n100 !== 11) return forms[0];
  if (n10 >= 2 && n10 <= 4 && (n100 < 10 || n100 >= 20)) return forms[1];
  return forms[2];
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-[4.5rem] flex-col items-center md:min-w-[6.5rem]">
      <div className="w-full rounded-lg bg-white/55 px-2 py-5 shadow-soft backdrop-blur-md md:py-7">
        <span key={value} className="countdown-value block font-display text-4xl font-medium text-charcoal md:text-6xl">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-3 font-body text-[0.6rem] uppercase tracking-[0.3em] text-charcoal/60 md:text-xs">
        {label}
      </span>
    </div>
  );
}

export default function Countdown({ t }: { t: Translation }) {
  const [time, setTime] = useState<TimeLeft>(calc);

  useEffect(() => {
    const id = window.setInterval(() => setTime(calc()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading kicker={t.countdown.kicker} title={t.countdown.title} />
        <Reveal delay={0.15}>
          <div className="flex justify-center gap-3 md:gap-5">
            <Unit value={time.days} label={plural(time.days, t.countdown.days as [string, string, string])} />
            <Unit value={time.hours} label={plural(time.hours, t.countdown.hours as [string, string, string])} />
            <Unit value={time.minutes} label={plural(time.minutes, t.countdown.minutes as [string, string, string])} />
            <Unit value={time.seconds} label={plural(time.seconds, t.countdown.seconds as [string, string, string])} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}