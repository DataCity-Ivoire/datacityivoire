import { Globe, Shield, Lightbulb, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const impacts = [
  { icon: Globe, title: "Afrique connectée", desc: "Un continent unifié par la donnée et les réseaux numériques." },
  { icon: Shield, title: "Souveraineté numérique", desc: "Des infrastructures maîtrisées localement pour protéger les données africaines." },
  { icon: Lightbulb, title: "Innovation locale", desc: "Des solutions conçues en Afrique, pour l'Afrique, par des talents africains." },
  { icon: TrendingUp, title: "Impact économique", desc: "Création de valeur durable pour les entreprises et les communautés." },
];

const VisionImpact = () => {
  const ref = useScrollReveal();

  return (
    <section id="vision" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16 reveal-on-scroll">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Vision & Impact</p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground">
            Bâtir le futur numérique africain
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
          "Devenir l'un des premiers <span className="text-secondary font-semibold">écosystèmes numériques africains souverains</span> capable de couvrir l'ensemble de la chaîne de valeur numérique."
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, i) => (
            <div
              key={item.title}
              className="reveal-on-scroll text-center p-6 rounded-2xl border border-border hover:border-secondary/30 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary mb-5 group-hover:shadow-glow transition-shadow">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionImpact;
