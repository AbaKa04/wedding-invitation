import { useState } from 'react';
import { Send, Check, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { CONFIG } from '../config';
import { Translation, Language } from '../translations';

type Attending = 'да' | 'нет' | '';

export default function Rsvp({ t, lang }: { t: Translation, lang: Language }) {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState<Attending>('');
  const [guests, setGuests] = useState('1');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !attending) {
      setError(lang === 'ru' ? 'Пожалуйста, заполните все поля.' : 'Сураныч, бардык талааларды толтуруңуз.');
      return;
    }
    setError('');
    setSent(true);

    // Формируем текст для WhatsApp
    const guestsText = attending === 'да' 
      ? `\n${t.rsvp.guests}: ${guests}` 
      : '';
      
    const message = lang === 'ru' 
      ? `Здравствуйте! Меня зовут ${name.trim()}.\nЯ ${attending === 'да' ? 'буду' : 'к сожалению, не смогу быть'} на свадьбе.${guestsText}`
      : `Салам! Менин атым ${name.trim()}.\nМен ${attending === 'да' ? 'тоюңузга келем' : 'тилекке каршы, келе албайм'}.${guestsText}`;

    // Перенаправляем в WhatsApp
    const waUrl = `https://wa.me/996551357171?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  const inputClass =
    'w-full rounded-lg border border-gold/30 bg-white/70 px-4 py-3 font-body font-light text-charcoal placeholder:text-charcoal/40 backdrop-blur-sm transition-all duration-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30';

  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-xl">
        <SectionHeading kicker={t.rsvp.kicker} title={t.rsvp.title} />

        <Reveal delay={0.1}>
          <p className="mb-10 text-center font-body font-light text-charcoal/70">
            {CONFIG.rsvp.deadline}
          </p>

          <div className="rounded-lg bg-white/55 p-8 shadow-card backdrop-blur-md md:p-10">
            {sent ? (
              <div className="py-8 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-ivory/80">
                  <Check className="h-7 w-7 text-gold" strokeWidth={1.5} />
                </span>
                <p className="mt-6 font-display text-3xl text-charcoal">
                  {t.rsvp.thanksTitle}
                </p>
                <p className="mt-3 font-body font-light text-charcoal/60">
                  {t.rsvp.thanksText}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <label className="block">
                  <span className="mb-2 block font-body text-xs uppercase tracking-[0.25em] text-charcoal/70">
                    {t.rsvp.name}
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.rsvp.namePlaceholder}
                    className={inputClass}
                  />
                </label>

                <fieldset className="mt-6">
                  <legend className="mb-3 block font-body text-xs uppercase tracking-[0.25em] text-charcoal/70">
                    {t.rsvp.attending}
                  </legend>
                  <div className="grid grid-cols-2 gap-3">
                    {(['да', 'нет'] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setAttending(option)}
                        aria-pressed={attending === option}
                        className={`rounded-lg border px-4 py-3 font-body text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                          attending === option
                            ? 'border-gold bg-gold/15 text-charcoal shadow-soft'
                            : 'border-gold/30 bg-white/60 text-charcoal/60 hover:border-gold/60'
                        }`}
                      >
                        {option === 'да' ? t.rsvp.yes : t.rsvp.no}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {attending === 'да' && (
                  <label className="mt-6 block">
                    <span className="mb-2 block font-body text-xs uppercase tracking-[0.25em] text-charcoal/70">
                      {t.rsvp.guests}
                    </span>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className={inputClass}
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? t.rsvp.guest : n < 5 ? t.rsvp.guests2 : t.rsvp.guests5}
                        </option>
                      ))}
                    </select>
                  </label>
                )}

                {error && (
                  <p className="mt-4 text-center font-body text-sm text-[#A05A2C]">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-xs uppercase tracking-[0.3em] text-ivory shadow-soft transition-all duration-300 hover:bg-[#B8903C] hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  <Send className="h-4 w-4" />
                  {t.rsvp.submit}
                </button>
              </form>
            )}

            <p className="mt-8 border-t border-gold/20 pt-6 text-center font-body text-sm font-light text-charcoal/60">
              {lang === 'ru' ? 'Есть вопросы? Напишите нам в ' : 'Суроолоруңуз барбы? Бизге жазыңыз '}
              <a
                href={CONFIG.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gold underline-offset-4 transition-colors hover:text-charcoal hover:underline"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              {' '}{CONFIG.contact.phone}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}