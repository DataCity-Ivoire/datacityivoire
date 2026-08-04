import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { expertises } from "@/data/site";

const ExpertiseGrid = ({ limit }: { limit?: number }) => {
  const items = limit ? expertises.slice(0, limit) : expertises;

  return (
    <section className="bg-surface py-24">
      <div className="container mx-auto px-4">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Nos expertises
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold lg:text-5xl">
              Un socle technologique complet
            </h2>
          </div>
          <Link
            to="/expertises"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            Voir toutes les expertises <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((e, i) => (
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
