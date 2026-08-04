import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import ApproachTimeline from "@/components/home/ApproachTimeline";
import Methodology from "@/components/home/Methodology";
import CtaSection from "@/components/home/CtaSection";

const Methodologie = () => (
  <>
    <Seo
      title="Méthodologie | Data City Ivoire"
      description="Notre méthodologie projet en cinq étapes : discovery, design, développement, déploiement, support et évolution continue."
      path="/methodologie"
    />
    <PageHero
      eyebrow="Méthodologie"
      title="Une exécution structurée, transparente et mesurable"
      description="Nous appliquons une méthode itérative qui sécurise les délais, la qualité et l'adoption de la solution par vos équipes."
    />
    <ApproachTimeline />
    <Methodology />
    <CtaSection />
  </>
);

export default Methodologie;
