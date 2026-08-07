import Reveal from "@/components/Reveal";
import { expertises } from "@/data/site";

const ExpertiseGrid = () => {
  return (
    <section className="bg-surface py-24">
      <div className="container mx-auto px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Nos expertises
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold lg:text-5xl">
            Un socle technologique complet
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {expertises.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 0.06}>
              <article className="group h-full bg-card p-8 transition-colors duration-300 hover:bg-accent/5">
                <e.icon className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-5 font-display text-lg font-bold">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;
