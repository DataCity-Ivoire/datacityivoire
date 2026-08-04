import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";

const stats = [
  { to: 11, suffix: "", label: "Domaines d'expertise couverts" },
  { to: 100, suffix: "%", label: "Projets conçus sur mesure" },
  { to: 24, suffix: "/7", label: "Supervision des plateformes critiques" },
  { to: 2050, suffix: "", label: "Horizon de notre vision souveraine" },
];

const Stats = () => (
  <section className="relative overflow-hidden bg-gradient-deep py-24 text-primary-foreground">
    <div className="absolute inset-0 grid-pattern opacity-[0.06]" aria-hidden="true" />
    <div className="container relative mx-auto px-4">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Pourquoi nous choisir
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold lg:text-5xl">
          La rigueur d'ingénierie au service de vos résultats
        </h2>
      </Reveal>

      <dl className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="glass-dark h-full rounded-2xl p-7">
              <dt className="font-display text-4xl font-bold text-accent">
                <Counter to={s.to} suffix={s.suffix} />
              </dt>
              <dd className="mt-3 text-sm text-primary-foreground/65">{s.label}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </div>
  </section>
);

export default Stats;
