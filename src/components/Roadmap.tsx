const phases = [
  {
    period: "0 – 5 ans",
    label: "Fondation",
    items: [
      "Projets pilotes stratégiques",
      "Structuration des données locales",
      "Premiers partenariats institutionnels",
    ],
    active: true,
  },
  {
    period: "5 – 10 ans",
    label: "Infrastructure",
    items: [
      "Déploiement de data centers",
      "IA avancée et machine learning",
      "Expansion nationale complète",
    ],
    active: false,
  },
  {
    period: "10 – 30 ans",
    label: "Écosystème",
    items: [
      "Réseau panafricain de données",
      "Connectivité souveraine continentale",
      "Finance numérique intégrée",
    ],
    active: false,
  },
];

const Roadmap = () => (
  <section id="roadmap" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 reveal-on-scroll">
        <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Feuille de route</p>
        <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground">
          Vision à long terme
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Une stratégie ambitieuse pour bâtir l'infrastructure numérique africaine de demain.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

        <div className="space-y-12">
          {phases.map((p, i) => (
            <div key={p.label} className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 border-secondary bg-background -translate-x-1/2 mt-1 z-10">
                {p.active && (
                  <div className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-40" />
                )}
              </div>

              {/* Spacer for desktop centering */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content card */}
              <div className="ml-10 md:ml-0 md:w-1/2 reveal-on-scroll">
                <div className={`rounded-2xl p-6 border ${p.active ? "border-secondary/40 bg-card shadow-glow" : "border-border bg-card"}`}>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-secondary font-display font-bold text-lg">{p.period}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {p.label}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="text-secondary mt-1">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Roadmap;
