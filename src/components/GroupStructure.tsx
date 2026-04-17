import { Database, Lightbulb, Wifi, Cloud, Brain, Shield, FlaskConical, Palette, Bot, Search, Network, Radio, Globe, Server } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const entities = [
  {
    icon:  Database,
    name: "Data City",
    abbr: "DC",
    role: "Le socle technologique du groupe",
    components: [
      { icon: Server, label: "Infrastructure numérique" },
      { icon: Cloud, label: "Cloud local" },
      { icon: Brain, label: "Intelligence artificielle appliquée au contexte africain" },
      { icon: Search, label: "Science des données & tableaux de bord décisionnels" },
      { icon: Shield, label: "Cybersécurité et protection des données" },
      
    ],
    objectif: "Offrir une infrastructure numérique robuste, fiable et souveraine, capable de soutenir le développement de services numériques à grande échelle.",
    color: "from-dc-blue to-dc-blue-light",
  },
  {
    icon: Lightbulb,
    name: "Ivoire Développement",
    abbr: "IDé",
    role: "Le laboratoire d'innovation et de développement",
    components: [
      { icon: Globe, label: "Conception de solutions africaines" },
      { icon: Palette, label: "UX/UI et design culturel" },
      { icon: Bot, label: "Robotique et prototypes" },
      { icon: FlaskConical, label: "Recherche & Développement (R&D)" },
    ],
    objectif: "Créer des solutions numériques africaines, pensées localement, déployables à grande échelle et génératrices de valeur sociale et économique.",
    color: "from-dc-orange to-dc-orange-light",
  },
  {
    icon: Globe,
    name: "Ivoire Connect",
    abbr: "IConn",
    role: "La plateforme de connectivité souveraine",
    components: [
      { icon: Network, label: "Réseaux et interconnexion" },
      { icon: Radio, label: "Services numériques" },
      { icon: Globe, label: "Connectivité souveraine" },
    ],
    objectif: "Proposer une connectivité moderne, programmable et intégrée, au service des applications et des utilisateurs de l'écosystème Data City Ivoire.",
    color: "from-dc-blue-light to-dc-orange",
  },
];

const GroupStructure = () => {
  const ref = useScrollReveal();

  return (
    <section id="groupe" className="py-24 bg-section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll" ref={ref}>
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Structure du groupe</p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground">
            Un écosystème intégré
          </h2>
          <p className="mt-4 text-primary-foreground/60 max-w-2xl mx-auto">
            Trois entités complémentaires au service de la transformation numérique africaine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {entities.map((e, i) => (
            <div
              key={e.abbr}
              className={`reveal-on-scroll relative group rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-8 hover:border-secondary/40 transition-all duration-300 flex flex-col`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`p-3 rounded-xl bg-gradient-to-br ${e.color} w-fit mb-6`}>
                <e.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="font-display text-xl font-bold text-primary-foreground">{e.name}</h3>
                <span className="text-secondary text-sm font-semibold">({e.abbr})</span>
              </div>
              <p className="text-secondary/80 text-sm font-medium mb-5">{e.role}</p>

              {/* Composants / Axes */}
              <div className="space-y-3 mb-6">
                {e.components.map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <c.icon className="w-4 h-4 text-secondary shrink-0" />
                    <span className="text-primary-foreground/70 text-sm">{c.label}</span>
                  </div>
                ))}
              </div>

              {/* Objectif global */}
              <div className="mt-auto pt-5 border-t border-primary-foreground/10">
                <p className="text-secondary text-xs font-semibold uppercase tracking-wider mb-2">Objectif global</p>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{e.objectif}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupStructure;
