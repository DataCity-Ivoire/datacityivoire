import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";

const stats = [
  { to: 2, suffix: "+", label: "Projets livrés", sub: "Avec succès" },
  { to: 2, suffix: "+", label: "Experts", sub: "En technologie" },
  { to: 1, suffix: "+", label: "Années d'exp.", sub: "Sur le marché" },
  { to: 95, suffix: "%", label: "Satisfaction", sub: "Clients satisfaits" },
];

const strengths = [
  {
    emoji: "⚡",
    title: "Innovation continue",
    text: "R&D permanente sur les technologies émergentes pour garder une longueur d'avance.",
  },
  {
    emoji: "🎯",
    title: "Solutions sur mesure",
    text: "Pas de template. Chaque solution est conçue spécifiquement pour vos besoins.",
  },
  {
    emoji: "📊",
    title: "Orienté données",
    text: "Chaque décision est guidée par la donnée, mesurée et optimisée en continu.",
  },
  {
    emoji: "🤝",
    title: "Accompagnement stratégique",
    text: "Nous sommes partenaires, pas seulement prestataires. Votre succès est le nôtre.",
  },
  {
    emoji: "🏗️",
    title: "Architecture évolutive",
    text: "Conçu pour grandir avec vous. Scalabilité et maintenabilité au cœur du design.",
  },
  {
    emoji: "🛡️",
    title: "Technologies modernes",
    text: "Stack technologique à l'état de l'art. Performance, sécurité et fiabilité garanties.",
  },
];

const DURATION = 1400;

/** Compteur qui monte de 0 à `to` quand il entre dans le viewport. */
const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (reduce) {
      setValue(to);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    let failsafe = 0;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;

        const begin = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - begin) / DURATION, 1);
          setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);

        // Filet de sécurité : si rAF est suspendu (onglet en arrière-plan),
        // le chiffre resterait bloqué à 0. On force la valeur finale.
        failsafe = window.setTimeout(() => setValue(to), DURATION + 600);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.clearTimeout(failsafe);
    };
  }, [to, reduce]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

const StrengthsSection = () => (
  <section className="bg-background py-24">
    <div className="container mx-auto px-4">
      {/* Chiffres clés */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <article className="group h-full rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-elevated">
              <p className="font-display text-4xl font-bold lg:text-5xl">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-3 font-display text-sm font-bold">{s.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.sub}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Nos atouts */}
      <div className="mx-auto mt-24 max-w-2xl text-center">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Nos atouts
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight lg:text-5xl">
            Pourquoi nous <span className="text-gradient">choisir</span> ?
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {strengths.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <article className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-elevated">
              <span className="shrink-0 text-xl" aria-hidden="true">
                {s.emoji}
              </span>
              <div>
                <h3 className="font-display text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default StrengthsSection;
