import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import ExpertiseGrid from "@/components/home/ExpertiseGrid";
import Faq from "@/components/home/Faq";
import CtaSection from "@/components/home/CtaSection";

const Expertises = () => (
  <>
    <Seo
      title="Expertises | Data City Ivoire"
      description="Data & analytics, intelligence artificielle, business intelligence, web, mobile, cloud, automatisation, conseil technologique et SIG."
      path="/expertises"
    />
    <PageHero
      eyebrow="Expertises"
      title="Onze domaines pour couvrir toute votre chaîne de valeur numérique"
      description="De la collecte de la donnée jusqu'à l'application déployée, nous maîtrisons chaque maillon de la chaîne technologique."
    />
    <ExpertiseGrid />
    <Faq />
    <CtaSection />
  </>
);

export default Expertises;
