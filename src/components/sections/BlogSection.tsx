import { useState } from "react";
import { ArrowRight, BrainCircuit, BarChart3, Cloud, LineChart, Code2, Workflow } from "lucide-react";
import Reveal from "@/components/Reveal";
import NewsletterBar from "@/components/sections/NewsletterBar";
import { cn } from "@/lib/utils";

/* Chaque catégorie porte sa couleur. Les classes sont écrites en toutes
   lettres : Tailwind ne peut pas générer un nom de classe assemblé
   dynamiquement, il serait purgé à la compilation. */
const CATEGORIES = {
  "Intelligence Artificielle": {
    icon: BrainCircuit,
    badge: "border-[#00C8B4]/40 bg-[#00C8B4]/15 text-[#00C8B4]",
    cover: "from-[#00C8B4]/30 via-[#00C8B4]/10 to-transparent",
    tint: "text-[#00C8B4]",
    hover: "hover:border-[#00C8B4]/50",
  },
  "Data & Analytics": {
    icon: BarChart3,
    badge: "border-[#1A6BFF]/40 bg-[#1A6BFF]/15 text-[#1A6BFF]",
    cover: "from-[#1A6BFF]/30 via-[#1A6BFF]/10 to-transparent",
    tint: "text-[#1A6BFF]",
    hover: "hover:border-[#1A6BFF]/50",
  },
  Cloud: {
    icon: Cloud,
    badge: "border-[#F5A623]/40 bg-[#F5A623]/15 text-[#F5A623]",
    cover: "from-[#F5A623]/30 via-[#F5A623]/10 to-transparent",
    tint: "text-[#F5A623]",
    hover: "hover:border-[#F5A623]/50",
  },
  "Business Intelligence": {
    icon: LineChart,
    badge: "border-[#7C3AED]/40 bg-[#7C3AED]/15 text-[#7C3AED]",
    cover: "from-[#7C3AED]/30 via-[#7C3AED]/10 to-transparent",
    tint: "text-[#7C3AED]",
    hover: "hover:border-[#7C3AED]/50",
  },
  Développement: {
    icon: Code2,
    badge: "border-[#06B6D4]/40 bg-[#06B6D4]/15 text-[#06B6D4]",
    cover: "from-[#06B6D4]/30 via-[#06B6D4]/10 to-transparent",
    tint: "text-[#06B6D4]",
    hover: "hover:border-[#06B6D4]/50",
  },
  Automatisation: {
    icon: Workflow,
    badge: "border-[#F58300]/40 bg-[#F58300]/15 text-[#F58300]",
    cover: "from-[#F58300]/30 via-[#F58300]/10 to-transparent",
    tint: "text-[#F58300]",
    hover: "hover:border-[#F58300]/50",
  },
} as const;

type Category = keyof typeof CATEGORIES;

interface Article {
  category: Category;
  date: string;
  readingTime: string;
  title: string;
  excerpt: string;
  /** Nom de fichier attendu dans src/assets/blog/ — voir le composant Cover plus bas. */
  imageFile: string;
}

const articles: Article[] = [
  {
    category: "Intelligence Artificielle",
    date: "28 juillet 2026",
    readingTime: "6 min de lecture",
    title: "L'IA au service de la transformation numérique africaine",
    excerpt:
      "Comment les modèles de machine learning adaptés au contexte local révolutionnent la prise de décision dans les organisations africaines. Enjeux, opportunités et retours d'expérience.",
    imageFile: "ia-afrique.jpg",
  },
  {
    category: "Data & Analytics",
    date: "12 juillet 2026",
    readingTime: "5 min de lecture",
    title: "Gouvernance de la donnée : par où commencer ?",
    excerpt:
      "Les premiers chantiers à lancer pour structurer, fiabiliser et documenter le patrimoine de données d'une organisation.",
    imageFile: "data-globe.jpg",
  },
  {
    category: "Cloud",
    date: "3 juillet 2026",
    readingTime: "7 min de lecture",
    title: "Souveraineté numérique et architectures hybrides",
    excerpt:
      "Concilier performance, coûts maîtrisés et exigences de localisation des données en Afrique de l'Ouest.",
    imageFile: "cloud-souverainete.jpg",
  },
  {
    category: "Business Intelligence",
    date: "21 juin 2026",
    readingTime: "4 min de lecture",
    title: "Des tableaux de bord que les directions utilisent vraiment",
    excerpt:
      "Concevoir des indicateurs lisibles, actionnables et adoptés par les équipes, plutôt qu'une accumulation de graphiques.",
    imageFile: "bi-insight.jpg",
  },
  {
    category: "Développement",
    date: "9 juin 2026",
    readingTime: "6 min de lecture",
    title: "Construire des applications qui tiennent dans la durée",
    excerpt:
      "Tests, revues de code et documentation : les pratiques d'ingénierie qui réduisent le coût de possession d'un logiciel.",
    imageFile: "dev-laptop.jpg",
  },
  {
    category: "Automatisation",
    date: "27 mai 2026",
    readingTime: "5 min de lecture",
    title: "Automatiser sans fragiliser ses processus métier",
    excerpt:
      "Identifier les tâches à automatiser en priorité et sécuriser les flux pour éviter de déplacer le problème.",
    imageFile: "automatisation-procurement.jpg",
  },
];

/** Photos éditoriales, une par article. */
import iaAfrique from "@/assets/blog/ia-afrique.jpg";
import dataGlobe from "@/assets/blog/data-globe.jpg";
import cloudSouverainete from "@/assets/blog/cloud-souverainete.jpg";
import biInsight from "@/assets/blog/bi-insight.jpg";
import devLaptop from "@/assets/blog/dev-laptop.jpg";
import automatisationProcurement from "@/assets/blog/automatisation-procurement.jpg";

const IMAGES: Record<string, string> = {
  "ia-afrique.jpg": iaAfrique,
  "data-globe.jpg": dataGlobe,
  "cloud-souverainete.jpg": cloudSouverainete,
  "bi-insight.jpg": biInsight,
  "dev-laptop.jpg": devLaptop,
  "automatisation-procurement.jpg": automatisationProcurement,
};

const FILTERS = ["Tous", ...Object.keys(CATEGORIES)] as const;

/** Visuel de couverture : vraie photo si disponible dans `IMAGES`, sinon
    dégradé teinté par catégorie en attendant qu'elle soit déposée. */
const Cover = ({
  category,
  imageFile,
  className,
}: {
  category: Category;
  imageFile: string;
  className?: string;
}) => {
  const meta = CATEGORIES[category];
  const Icon = meta.icon;
  const photo = IMAGES[imageFile];

  return (
    <div className={cn("relative overflow-hidden bg-surface", className)}>
      {photo ? (
        <>
          <img src={photo} alt="" className="h-full w-full object-cover" loading="lazy" />
          {/* Voile pour que le badge reste lisible sur n'importe quelle photo. */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
            aria-hidden="true"
          />
        </>
      ) : (
        <>
          <div className={cn("absolute inset-0 bg-gradient-to-br", meta.cover)} aria-hidden="true" />
          <div className="absolute inset-0 grid-pattern opacity-[0.07]" aria-hidden="true" />
          <Icon
            className={cn(
              "absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 opacity-25",
              meta.tint,
            )}
            aria-hidden="true"
          />
        </>
      )}
      <span
        className={cn(
          "absolute left-4 top-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm",
          meta.badge,
        )}
      >
        {category}
      </span>
    </div>
  );
};

const BlogSection = () => {
  const [filter, setFilter] = useState<string>("Tous");
  const visible = filter === "Tous" ? articles : articles.filter((a) => a.category === filter);
  const [featured, ...rest] = visible;

  return (
    <section id="blog" className="scroll-mt-24 bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Insights &amp; expertise
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight lg:text-5xl">
              Notre <span className="text-gradient">Blog</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Tendances technologiques, retours d'expérience et bonnes pratiques pour accélérer
              votre transformation numérique.
            </p>
          </Reveal>
        </div>

        {/* Filtres par catégorie */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-2.5">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  "min-h-11 rounded-full border px-5 text-sm font-medium transition-colors",
                  filter === f
                    ? "border-accent bg-accent/15 text-accent"
                    : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Article mis en avant */}
        {featured && (
          <Reveal delay={0.24}>
            <article
              className={cn(
                "group mt-12 grid overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-elevated lg:grid-cols-2",
                CATEGORIES[featured.category].hover,
              )}
            >
              <Cover
                category={featured.category}
                imageFile={featured.imageFile}
                className="min-h-[16rem] lg:min-h-[22rem]"
              />

              <div className="flex flex-col p-8 lg:p-10">
                <p className="text-xs text-muted-foreground">
                  {featured.date} <span className="mx-1.5">•</span> {featured.readingTime}
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold leading-snug lg:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{featured.excerpt}</p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                  <span className="text-sm text-muted-foreground">Équipe Data City Ivoire</span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-2 text-sm font-semibold",
                      CATEGORIES[featured.category].tint,
                    )}
                  >
                    Lire l'article
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        )}

        {/* Articles suivants */}
        {rest.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.08}>
                <article
                  className={cn(
                    "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated",
                    CATEGORIES[a.category].hover,
                  )}
                >
                  <Cover category={a.category} imageFile={a.imageFile} className="h-44" />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs text-muted-foreground">
                      {a.date} <span className="mx-1.5">•</span> {a.readingTime}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-bold leading-snug">{a.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                    <span
                      className={cn(
                        "mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold",
                        CATEGORIES[a.category].tint,
                      )}
                    >
                      Lire l'article
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <div className="mt-16">
        <NewsletterBar />
      </div>
    </section>
  );
};

export default BlogSection;
