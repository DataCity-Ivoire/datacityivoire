import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/home/CtaSection";
import { Database, LineChart, ShieldCheck } from "lucide-react";

const domains = [
  {
    icon: Database,
    title: "Plateformes de données",
    text: "Centralisation, fiabilisation et exposition de données métier pour des organisations multi-sites.",
  },
  {
    icon: LineChart,
    title: "Pilotage décisionnel",
    text: "Tableaux de bord temps réel destinés aux directions générales et aux équipes opérationnelles.",
  },
  {
    icon: ShieldCheck,
    title: "Applications métier sécurisées",
    text: "Applications web et mobile robustes, avec gestion fine des accès et des données sensibles.",
  },
];

const Realisations = () => (
  <>
    <Seo
      title="Réalisations | Data City Ivoire"
      description="Les types de projets menés par Data City Ivoire : plateformes de données, pilotage décisionnel et applications métier sécurisées."
      path="/realisations"
    />
    <PageHero
      eyebrow="Réalisations"
      title="Des projets conçus pour durer"
      description="Nos engagements de confidentialité nous conduisent à présenter nos travaux par typologie. Les références détaillées sont partagées sur demande."
    />

    <section className="bg-background py-24">
      <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
        {domains.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.08}>
            <article className="h-full rounded-2xl border border-border bg-card p-8">
              <d.icon className="h-6 w-6 text-accent" />
              <h2 className="mt-5 font-display text-lg font-bold">{d.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="container mx-auto mt-16 px-4">
        <Reveal>
          <p className="rounded-2xl border border-dashed border-border bg-surface p-8 text-sm leading-relaxed text-muted-foreground">
            Vous souhaitez consulter des références précises, des architectures types ou des
            résultats chiffrés ? Contactez-nous : nous partageons un dossier détaillé après un
            premier échange de cadrage.
          </p>
        </Reveal>
      </div>
    </section>

    <CtaSection />
  </>
);

export default Realisations;
