import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import Stats from "@/components/home/Stats";
import CtaSection from "@/components/home/CtaSection";

const values = [
  { title: "Rigueur", text: "Nous documentons, testons et sécurisons chaque livrable." },
  { title: "Proximité", text: "Nous travaillons avec vos équipes, pas à leur place." },
  { title: "Souveraineté", text: "Vos données restent votre patrimoine stratégique." },
  { title: "Durabilité", text: "Nous livrons des solutions maintenables sur le long terme." },
];

const About = () => (
  <>
    <Seo
      title="À propos | Data City Ivoire"
      description="Découvrez Data City Ivoire : notre mission, nos valeurs et notre ambition de bâtir un écosystème numérique africain souverain à l'horizon 2050."
      path="/a-propos"
    />
    <PageHero
      eyebrow="À propos"
      title="Bâtir l'infrastructure numérique de l'Afrique de demain"
      description="Data City Ivoire est une entreprise technologique ivoirienne spécialisée dans la donnée, l'intelligence artificielle et l'ingénierie logicielle."
    />

    <section className="bg-background py-24">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-bold">Notre mission</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Rendre la donnée utile, accessible et maîtrisée. Nous concevons des plateformes et des
            modèles qui aident nos clients à décider plus vite, avec plus de fiabilité, et à
            construire des services numériques à la hauteur de leurs ambitions.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Chaque mission s'accompagne d'un transfert de compétences : nos clients doivent pouvoir
            opérer, comprendre et faire évoluer ce que nous construisons avec eux.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl font-bold">Notre histoire</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Née à Abidjan de la conviction que l'Afrique doit produire ses propres solutions
            technologiques, Data City Ivoire réunit des profils data, ingénierie logicielle et
            conseil autour d'une même exigence de qualité.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Nous intervenons auprès d'entreprises privées, de PME en croissance et d'acteurs
            institutionnels engagés dans leur modernisation numérique.
          </p>
        </Reveal>
      </div>

      <div className="container mx-auto mt-20 grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.08}>
            <article className="h-full rounded-2xl border border-border bg-card p-7">
              <h3 className="font-display text-lg font-bold text-accent">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <Stats />
    <CtaSection />
  </>
);

export default About;
