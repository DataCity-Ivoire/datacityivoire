import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

const CtaSection = () => (
  <section className="bg-surface pb-24">
    <div className="container mx-auto px-4">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-deep px-8 py-16 text-center text-primary-foreground lg:px-16 lg:py-20">
          <div className="absolute inset-0 grid-pattern opacity-[0.07]" aria-hidden="true" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/25 blur-[100px]" aria-hidden="true" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight lg:text-5xl">
              Prêt à transformer vos données en avantage décisif ?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/70">
              Parlons de votre projet. Un échange de cadrage suffit pour définir les premières
              étapes concrètes.
            </p>
            <div className="mt-10 flex justify-center">
              <MagneticButton to="/contact">
                Nous contacter <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CtaSection;
