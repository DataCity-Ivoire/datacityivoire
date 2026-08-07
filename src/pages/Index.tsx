import Seo from "@/components/Seo";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import ExpertiseGrid from "@/components/home/ExpertiseGrid";
import DataShowcase from "@/components/home/DataShowcase";
import ApproachSection from "@/components/sections/ApproachSection";
import StrengthsSection from "@/components/sections/StrengthsSection";
import MethodologySection from "@/components/sections/MethodologySection";
import Faq from "@/components/home/Faq";
import CtaSection from "@/components/home/CtaSection";
import BlogSection from "@/components/sections/BlogSection";
import AboutSection from "@/components/sections/AboutSection";

const Index = () => (
  <>
    <Seo
      title="Data City Ivoire | Data, IA et transformation numérique"
      description="Data City Ivoire accompagne entreprises et institutions africaines : data & analytics, intelligence artificielle, applications web et mobile, cloud et conseil technologique."
      path="/"
    />

    <div id="accueil" className="scroll-mt-24">
      <Hero />
    </div>

    <Marquee />

    <div id="expertises" className="scroll-mt-24">
      <ExpertiseGrid />
      <ApproachSection />
    </div>

    <StrengthsSection />

    <DataShowcase />

    <MethodologySection />

    <BlogSection />
    <AboutSection />

    <Faq />
    <CtaSection />
  </>
);

export default Index;
