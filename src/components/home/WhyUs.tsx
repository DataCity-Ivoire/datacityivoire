import { ShieldCheck, Users, Gauge, Layers } from "lucide-react";
import Reveal from "@/components/Reveal";

const cards = [
  {
    icon: Users,
    title: "Expertise locale, standards mondiaux",
    text: "Des équipes ancrées en Côte d'Ivoire qui appliquent les meilleures pratiques internationales d'ingénierie et de gouvernance de la donnée.",
  },
  {
    icon: Layers,
    title: "Solutions sur mesure",
    text: "Aucune solution générique : nous concevons des architectures adaptées à votre métier, votre maturité et vos contraintes réelles.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité et souveraineté",
    text: "Protection des données, conformité et maîtrise de l'hébergement au cœur de chaque décision d'architecture.",
  },
  {
    icon: Gauge,
    title: "Impact mesurable",
    text: "Chaque projet est piloté par des indicateurs clairs : performance, adoption, gains opérationnels et retour sur investissement.",
  },
];

const WhyUs = () => (
  <section className="bg-background py-24">
    <div className="container mx-auto px-4">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Pourquoi Data City Ivoire
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold lg:text-5xl">
          Un partenaire technologique exigeant
        </h2>
        <p className="mt-4 text-muted-foreground">
          Nous transformons des systèmes complexes en leviers de décision simples, fiables et
          maîtrisés par vos équipes.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-elevated">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand">
                <c.icon className="h-5 w-5 text-accent-foreground" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
