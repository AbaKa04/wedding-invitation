import { useMemo } from 'react';

const PETALS = 25;
const DUST = 24;

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function SilkBackground() {
  const petals = useMemo(
    () =>
      Array.from({ length: PETALS }, (_, i) => ({
        id: i,
        left: random(0, 100),
        delay: random(0, 18),
        duration: random(14, 24),
        scale: random(0.6, 1.3),
        opacity: random(0.4, 0.8),
      })),
    []
  );

  const dust = useMemo(
    () =>
      Array.from({ length: DUST }, (_, i) => ({
        id: i,
        left: random(0, 100),
        top: random(20, 100),
        delay: random(0, 10),
        duration: random(8, 16),
        scale: random(0.6, 1.6),
      })),
    []
  );

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <div className="silk-bg absolute inset-0" />
      <div className="silk-wave absolute inset-0" />
      <div className="silk-wave-2 absolute inset-0" />
      <div className="silk-sheen absolute inset-0" />

      {petals.map((p) => (
        <span
          key={`petal-${p.id}`}
          className="petal"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `scale(${p.scale})`,
            ['--petal-opacity' as string]: p.opacity,
          }}
        />
      ))}

      {dust.map((d) => (
        <span
          key={`dust-${d.id}`}
          className="dust"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            transform: `scale(${d.scale})`,
          }}
        />
      ))}
    </div>
  );
}
