import Seo from "@/components/Seo";
import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import ExpertiseGrid from "@/components/home/ExpertiseGrid";
import ApproachTimeline from "@/components/home/ApproachTimeline";
import Stats from "@/components/home/Stats";
import Vision from "@/components/home/Vision";
import Methodology from "@/components/home/Methodology";
import Faq from "@/components/home/Faq";
import CtaSection from "@/components/home/CtaSection";

const Index = () => (
  <>
    <Seo
      title="Data City Ivoire | Data, IA et transformation numérique"
      description="Data City Ivoire accompagne entreprises et institutions africaines : data & analytics, intelligence artificielle, applications web et mobile, cloud et conseil technologique."
      path="/"
    />
    <Hero />
    <WhyUs />
    <ExpertiseGrid limit={6} />
    <ApproachTimeline />
    <Stats />
    <Vision />
    <Methodology />
    <Faq />
    <CtaSection />
  </>
);

export default Index;
