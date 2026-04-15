import { Search, Layers, Eye } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Compréhension du besoin",
    description: "Nous analysons en profondeur vos enjeux, vos données existantes et vos objectifs stratégiques.",
  },
  {
    num: "02",
    icon: Layers,
    title: "Structuration des données",
    description: "Nous organisons, nettoyons et centralisons vos données pour en maximiser la valeur.",
  },
  {
    num: "03",
    icon: Eye,
    title: "Visualisation & Décision",
    description: "Nous créons des outils de visualisation qui transforment la donnée en action concrète.",
  },
];

const Approach = () => (
  <section id="approche" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Notre approche</p>
        <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground">
          Une méthodologie éprouvée
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connection line */}
        <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-secondary/20 via-secondary to-secondary/20" />

        {steps.map((s) => (
          <div key={s.num} className="relative text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-orange mb-6 relative z-10">
              <s.icon className="w-7 h-7 text-secondary-foreground" />
            </div>
            <p className="text-secondary font-display font-bold text-sm mb-2">{s.num}</p>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Approach;
