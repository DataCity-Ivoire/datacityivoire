import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/home/CtaSection";

const articles = [
  {
    category: "Data",
    title: "Gouvernance de la donnée : par où commencer ?",
    excerpt:
      "Les premiers chantiers à lancer pour structurer, fiabiliser et documenter le patrimoine de données d'une organisation.",
  },
  {
    category: "Intelligence artificielle",
    title: "IA appliquée : choisir les cas d'usage qui rapportent",
    excerpt:
      "Une grille de lecture simple pour prioriser les cas d'usage d'IA selon leur faisabilité et leur valeur métier.",
  },
  {
    category: "Cloud",
    title: "Souveraineté numérique et architectures hybrides",
    excerpt:
      "Comment concilier performance, coûts maîtrisés et exigences de localisation des données en Afrique de l'Ouest.",
  },
];

const Blog = () => (
  <>
    <Seo
      title="Blog | Data City Ivoire"
      description="Analyses et retours d'expérience sur la donnée, l'intelligence artificielle, le cloud et la transformation numérique en Afrique."
      path="/blog"
    />
    <PageHero
      eyebrow="Blog"
      title="Analyses et retours d'expérience"
      description="Nous partageons régulièrement notre lecture des sujets data, IA et transformation numérique appliqués au contexte africain."
    />

    <section className="bg-background py-24">
      <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
        {articles.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.08}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/50">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {a.category}
              </span>
              <h2 className="mt-4 font-display text-lg font-bold leading-snug">{a.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
              <span className="mt-6 text-xs text-muted-foreground">Article à paraître</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <CtaSection />
  </>
);

export default Blog;
