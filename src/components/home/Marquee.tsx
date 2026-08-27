const items = [
  "Data & Analytics",
  "Intelligence Artificielle",
  "Business Intelligence",
  "Cloud",
  "Applications Web & Mobile",
  "Automatisation",
  "SIG & géodonnées",
  "Robotique et prototypes",
  "UX/UI et design culturel",
  "Recherche & Développement (R&D)",
  "Transformation numérique",
  "Conseil technologique",
];

const Marquee = () => (
  <section className="border-y border-border bg-surface py-6" aria-label="Nos domaines d'intervention">
    <div className="marquee">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <div key={copy} className="marquee__group" aria-hidden={copy === 1}>
            {items.map((item) => (
              <span key={item} className="flex items-center gap-6 whitespace-nowrap">
                <span className="font-display text-lg font-bold uppercase tracking-tight text-foreground/70">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Marquee;
