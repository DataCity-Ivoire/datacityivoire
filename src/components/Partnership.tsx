const Partnership = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center rounded-3xl bg-primary p-12 lg:p-16 relative overflow-hidden reveal-on-scroll">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary/5 blur-2xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Appel à partenariat
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Nous recherchons des partenaires stratégiques pour construire l'avenir numérique africain
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="#contact"
              className="bg-gradient-orange text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              Devenir partenaire
            </a>
            <a
              href="#contact"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:border-secondary hover:text-secondary transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Partnership;
