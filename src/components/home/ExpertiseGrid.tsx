import Reveal from "@/components/Reveal";
import { expertises } from "@/data/site";

const ExpertiseGrid = () => {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:px-4 sm:py-1.5 sm:text-xs">
            Nos expertises
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight sm:mt-6 sm:text-3xl lg:text-5xl">
            Un socle technologique complet
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-12 sm:rounded-3xl sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {expertises.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 0.06}>
              <article className="group h-full bg-card p-5 transition-colors duration-300 hover:bg-accent/5 sm:p-6 lg:p-8">
                <e.icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6" />
                <h3 className="mt-4 font-display text-base font-bold sm:mt-5 sm:text-lg">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">{e.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;
