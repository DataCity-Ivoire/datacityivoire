import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-hero-gradient opacity-80" />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <p className="animate-fade-up text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
        Data City Ivoire
      </p>
      <h5 className="animate-fade-up-delay-1 font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto">
        Construire une Afrique connectée, intelligente et souveraine grâce à la{" "}
        <span className="text-gradient">donnée</span>
      </h5>
      <div className="animate-fade-up-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#contact"
          className="bg-gradient-orange text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-glow"
        >
          Demander une démo
        </a>
        <a
          href="#contact"
          className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:border-secondary hover:text-secondary transition-colors"
        >
          Nous contacter
        </a>
      </div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
