import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/home/CtaSection";
import { site } from "@/data/site";

const offers = [
  { role: "Data Analyst", type: "Temps plein · Abidjan", text: "Analyse, modélisation et restitution de données métier." },
  { role: "Data Engineer", type: "Temps plein · Abidjan", text: "Conception et industrialisation de pipelines de données." },
  { role: "Développeur Full-Stack", type: "Temps plein · Hybride", text: "Développement d'applications web et mobile performantes." },
  { role: "Consultant IA", type: "Mission · Hybride", text: "Cadrage et déploiement de cas d'usage d'intelligence artificielle." },
];

const Carrieres = () => (
  <>
    <Seo
      title="Carrières | Data City Ivoire"
      description="Rejoignez Data City Ivoire : data analyst, data engineer, développeur full-stack et consultant IA à Abidjan."
      path="/carrieres"
    />
    <PageHero
      eyebrow="Carrières"
      title="Construisons ensemble la tech africaine de référence"
      description="Nous recherchons des profils curieux et rigoureux, qui veulent produire un impact réel sur le continent."
    />

    <section className="bg-background py-24">
      <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2">
        {offers.map((o, i) => (
          <Reveal key={o.role} delay={i * 0.07}>
            <article className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8">
              <div>
                <h2 className="font-display text-xl font-bold">{o.role}</h2>
                <p className="mt-1 text-xs uppercase tracking-wider text-accent">{o.type}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{o.text}</p>
              </div>
              <a
                href={`mailto:${site.email}?subject=Candidature ${encodeURIComponent(o.role)}`}
                className="mt-6 inline-flex min-h-11 w-fit items-center rounded-xl border border-border px-5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Postuler
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="container mx-auto mt-14 px-4">
        <Reveal>
          <p className="text-sm text-muted-foreground">
            Candidature spontanée ? Écrivez-nous à{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-accent hover:underline">
              {site.email}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>

    <CtaSection />
  </>
);

export default Carrieres;
