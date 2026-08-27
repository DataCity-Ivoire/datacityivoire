import { Lightbulb, CheckCircle2, Globe2, Users, Heart } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

/* Chaque atout porte sa propre couleur d'accent. Les classes sont écrites en
   toutes lettres : Tailwind ne peut pas générer un nom de classe assemblé
   dynamiquement, il serait purgé à la compilation. */
const strengths = [
  {
    icon: Lightbulb,
    label: "Innovation",
    title: "Innovation",
    text: "Développement de solutions nouvelles, pragmatiques et évolutives.",
    badge: "border-[#1A6BFF]/30 bg-[#1A6BFF]/10",
    tint: "text-[#1A6BFF]",
    hover: "hover:border-[#1A6BFF]/50",
  },
  {
    icon: Globe2,
    label: "Souveraineté",
    title: "Souveraineté",
    text: "Contrôle local des données, des infrastructures et des décisions technologiques.",
    badge: "border-[#7C3AED]/30 bg-[#7C3AED]/10",
    tint: "text-[#7C3AED]",
    hover: "hover:border-[#7C3AED]/50",
  },
  {
    icon: CheckCircle2,
    label: "Excellence",
    title: "Excellence",
    text: "Respect des standards internationaux (sécurité, performance, fiabilité).",
    badge: "border-[#00C8B4]/30 bg-[#00C8B4]/10",
    tint: "text-[#00C8B4]",
    hover: "hover:border-[#00C8B4]/50",
  },
  {
    icon: Users,
    label: "Proximité",
    title: "Proximité",
    text: "Solutions conçues pour et avec les utilisateurs locaux.",
    badge: "border-[#F5A623]/30 bg-[#F5A623]/10",
    tint: "text-[#F5A623]",
    hover: "hover:border-[#F5A623]/50",
  },
  {
    icon: Heart,
    label: "Fierté africaine",
    title: "Fierté africaine",
    text: "Valorisation des talents, des langues et des usages africains.",
    badge: "border-[#F58300]/30 bg-[#F58300]/10",
    tint: "text-[#F58300]",
    hover: "hover:border-[#F58300]/50",
  },
];

const AboutSection = () => (
  <section id="a-propos" className="relative scroll-mt-24 overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
    <div className="absolute inset-0 grid-pattern opacity-[0.04]" aria-hidden="true" />
    <div
      className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-accent/10 blur-[80px] sm:-right-24 sm:h-80 sm:w-80 sm:blur-[100px]"
      aria-hidden="true"
    />

    <div className="container relative mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:px-4 sm:py-1.5 sm:text-xs">
            Notre différence
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight sm:mt-6 sm:text-3xl lg:text-5xl">
            Pourquoi Data City <span className="text-gradient">Ivoire</span> ?
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-5">
            Nous combinons expertise technologique globale et connaissance profonde du contexte
            africain pour créer des solutions qui transforment réellement les organisations.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:mt-14 sm:gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {strengths.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <article
              className={cn(
                "group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated sm:p-6 lg:p-7",
                s.hover,
              )}
            >
              <span className={cn("grid h-10 w-10 place-items-center rounded-xl border sm:h-12 sm:w-12", s.badge)}>
                <s.icon className={cn("h-4 w-4 sm:h-5 sm:w-5", s.tint)} />
              </span>
              <p className={cn("mt-4 text-[10px] font-semibold uppercase tracking-[0.15em] sm:mt-6 sm:text-xs", s.tint)}>
                {s.label}
              </p>
              <h3 className="mt-2 font-display text-base font-bold leading-snug sm:text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">{s.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Positionnement stratégique */}
      <Reveal delay={0.4}>
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-accent/20 bg-accent/5 px-8 py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Positionnement stratégique
          </p>
          <p className="mt-4 font-display text-xl font-semibold leading-relaxed text-foreground lg:text-2xl">
            Data City Ivoire se positionne comme{" "}
            <span className="text-gradient">l'âme numérique de l'Afrique</span> : un acteur
            crédible, structurant et visionnaire.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AboutSection;