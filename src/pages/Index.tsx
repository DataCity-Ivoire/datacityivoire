import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import GroupStructure from "@/components/GroupStructure";
import Approach from "@/components/Approach";
import Roadmap from "@/components/Roadmap";
import VisionImpact from "@/components/VisionImpact";
import Infrastructure from "@/components/Infrastructure";
import Partnership from "@/components/Partnership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollRevealAll } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollRevealAll();

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <Services />
      <GroupStructure />
      <Approach />
      <Roadmap />
      <VisionImpact />
      <Infrastructure />
      <Partnership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
