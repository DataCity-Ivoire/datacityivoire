import Reveal from "@/components/Reveal";
import { steps } from "@/components/home/ApproachTimeline";

const Methodology = () => (
  <section className="bg-surface py-24">
    <div className="container mx-auto px-4">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Notre méthodologie
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold lg:text-5xl">
          Cinq étapes, un fil conducteur : la valeur livrée
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-5">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.07}>
            <article className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-5xl font-bold text-accent/15">{s.num}</span>
              <h3 className="mt-3 font-display text-base font-bold">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" aria-hidden="true" />
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Methodology;
