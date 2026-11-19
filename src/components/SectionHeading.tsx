import Reveal from './Reveal';

export default function SectionHeading({
  kicker,
  title,
}: {
  kicker?: string;
  title: string;
}) {
  return (
    <Reveal className="text-center mb-10 md:mb-14">
      {kicker && (
        <p className="font-body text-xs md:text-sm uppercase tracking-[0.35em] text-gold mb-4">
          {kicker}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-medium text-charcoal">
        {title}
      </h2>
      <div className="mt-6 flex items-center justify-center gap-3">
        <span className="block h-px w-14 bg-gradient-to-r from-transparent to-gold/60" />
        <span className="block h-1.5 w-1.5 rotate-45 bg-gold" />
        <span className="block h-px w-14 bg-gradient-to-l from-transparent to-gold/60" />
      </div>
    </Reveal>
  );
}
