import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

/* Progression chromatique du bleu au orange de marque, phase après phase.
   Les classes sont écrites en toutes lettres : Tailwind ne peut pas générer
   un nom de classe assemblé dynamiquement, il serait purgé à la compilation. */
const phases = [
  {
    emoji: "🔍",
    title: "Discovery",
    text: "Analyse des besoins, cartographie des processus, définition des objectifs.",
    node: "bg-[#1A6BFF]",
    tint: "text-[#1A6BFF]",
    hover: "hover:border-[#1A6BFF]/50",
    glow: "shadow-[0_0_28px_-6px_#1A6BFF]",
  },
  {
    emoji: "📋",
    title: "Analyse",
    text: "Audit technique, étude de faisabilité, définition du scope et du ROI.",
    node: "bg-[#1E88E5]",
    tint: "text-[#1E88E5]",
    hover: "hover:border-[#1E88E5]/50",
    glow: "shadow-[0_0_28px_-6px_#1E88E5]",
  },
  {
    emoji: "🏛️",
    title: "Architecture",
    text: "Conception de l'architecture solution, choix technologiques, plan de sécurité.",
    node: "bg-[#10B981]",
    tint: "text-[#10B981]",
    hover: "hover:border-[#10B981]/50",
    glow: "shadow-[0_0_28px_-6px_#10B981]",
  },
  {
    emoji: "🎨",
    title: "Design",
    text: "Maquettes, parcours utilisateur et système de design validés avec vos équipes.",
    node: "bg-[#06B6D4]",
    tint: "text-[#06B6D4]",
    hover: "hover:border-[#06B6D4]/50",
    glow: "shadow-[0_0_28px_-6px_#06B6D4]",
  },
  {
    emoji: "💻",
    title: "Développement",
    text: "Développement itératif, revues de code et tests automatisés à chaque sprint.",
    node: "bg-[#00C8B4]",
    tint: "text-[#00C8B4]",
    hover: "hover:border-[#00C8B4]/50",
    glow: "shadow-[0_0_28px_-6px_#00C8B4]",
  },
  {
    emoji: "🚀",
    title: "Déploiement",
    text: "Mise en production progressive, migration des données et formation des utilisateurs.",
    node: "bg-[#F5A623]",
    tint: "text-[#F5A623]",
    hover: "hover:border-[#F5A623]/50",
    glow: "shadow-[0_0_28px_-6px_#F5A623]",
  },
  {
    emoji: "🛠️",
    title: "Support",
    text: "Supervision, maintenance évolutive et accompagnement au changement.",
    node: "bg-[#F58300]",
    tint: "text-[#F58300]",
    hover: "hover:border-[#F58300]/50",
    glow: "shadow-[0_0_28px_-6px_#F58300]",
  },
];

const MethodologySection = () => (
  <section id="methodologie" className="scroll-mt-24 bg-background py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Cadre de travail
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight lg:text-5xl">
            Notre <span className="text-gradient">Méthodologie</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Un processus en 7 phases éprouvé, alliant agilité et rigueur pour garantir le succès de
            chaque projet.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-16">
        {/* Ligne de liaison : à gauche sur mobile, centrée à partir de lg. */}
        <div
          className="absolute left-5 top-0 h-full w-px bg-border lg:left-1/2 lg:-translate-x-1/2"
          aria-hidden="true"
        />

        <div className="space-y-6 lg:space-y-4">
          {phases.map((p, i) => {
            const onLeft = i % 2 === 0;
            return (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="relative grid items-center gap-6 pl-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:pl-0">
                  {/* Pastille numérotée */}
                  <span
                    className={cn(
                      "absolute left-0 top-5 grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-white",
                      "lg:relative lg:left-auto lg:top-auto lg:col-start-2 lg:h-11 lg:w-11",
                      p.node,
                      p.glow,
                    )}
                  >
                    {i + 1}
                  </span>

                  <article
                    className={cn(
                      "rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated",
                      p.hover,
                      onLeft ? "lg:col-start-1 lg:text-right" : "lg:col-start-3",
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center gap-3",
                        onLeft && "lg:flex-row-reverse lg:justify-start",
                      )}
                    >
                      <span className="text-xl" aria-hidden="true">
                        {p.emoji}
                      </span>
                      <div>
                        <p
                          className={cn(
                            "text-xs font-semibold uppercase tracking-[0.15em]",
                            p.tint,
                          )}
                        >
                          Phase {i + 1}
                        </p>
                        <h3 className="mt-0.5 font-display text-lg font-bold">{p.title}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </article>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default MethodologySection;
