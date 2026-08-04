import { Target, Globe2, HeartHandshake } from "lucide-react";
import Reveal from "@/components/Reveal";

const pillars = [
  {
    icon: Target,
    title: "Souveraineté",
    text: "Des infrastructures et des données maîtrisées localement, au service des organisations africaines.",
  },
  {
    icon: Globe2,
    title: "Excellence",
    text: "Un niveau d'exigence technique comparable aux meilleurs standards internationaux.",
  },
  {
    icon: HeartHandshake,
    title: "Impact",
    text: "Des solutions qui créent de la valeur économique et sociale mesurable sur le continent.",
  },
];

const Vision = () => (
  <section className="bg-background py-24">
    <div className="container mx-auto grid gap-14 px-4 lg:grid-cols-2 lg:items-center">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Notre vision</p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight lg:text-5xl">
          Devenir à l'horizon 2050 un écosystème numérique africain souverain
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Nous croyons que la donnée est la première infrastructure du continent. Notre ambition est
          de bâtir, projet après projet, les fondations technologiques d'une Afrique qui produit,
          maîtrise et valorise ses propres données.
        </p>
      </Reveal>

      <div className="space-y-5">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <article className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10">
                <p.icon className="h-5 w-5 text-accent" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Vision;
