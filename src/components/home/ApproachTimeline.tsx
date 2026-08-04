import Reveal from "@/components/Reveal";

export const steps = [
  {
    num: "01",
    title: "Discovery",
    text: "Immersion dans votre contexte : enjeux, données disponibles, contraintes et objectifs mesurables.",
  },
  {
    num: "02",
    title: "Design",
    text: "Conception de l'architecture, des parcours utilisateurs et du modèle de données cible.",
  },
  {
    num: "03",
    title: "Développement",
    text: "Construction itérative, revues régulières et qualité logicielle vérifiée à chaque incrément.",
  },
  {
    num: "04",
    title: "Déploiement",
    text: "Mise en production maîtrisée, sécurisation, formation des équipes et transfert de compétences.",
  },
  {
    num: "05",
    title: "Support & évolution",
    text: "Suivi des performances, maintenance et amélioration continue de la solution dans la durée.",
  },
];

const ApproachTimeline = () => (
  <section className="bg-background py-24">
    <div className="container mx-auto px-4">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Notre approche</p>
        <h2 className="mt-4 font-display text-3xl font-bold lg:text-5xl">
          Une méthode claire, du cadrage à l'exploitation
        </h2>
      </Reveal>

      <ol className="relative mt-16 space-y-10 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border md:space-y-12">
        {steps.map((s, i) => (
          <li key={s.num}>
            <Reveal delay={i * 0.06} className="relative flex gap-6 pl-0">
              <span className="z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-brand font-display text-xs font-bold text-accent-foreground">
                {s.num}
              </span>
              <div className="pt-1">
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ApproachTimeline;
