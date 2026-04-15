import { Database, Lightbulb, Wifi } from "lucide-react";

const entities = [
  {
    icon: Database,
    name: "Data City",
    abbr: "DC",
    role: "Le socle technologique du groupe",
    description: "Analyse de données, dashboards, infrastructure numérique. La fondation technologique sur laquelle repose l'ensemble de l'écosystème.",
    color: "from-dc-blue to-dc-blue-light",
  },
  {
    icon: Lightbulb,
    name: "Ivoire Développement",
    abbr: "IDé",
    role: "Le laboratoire d'innovation",
    description: "Conception de solutions, R&D et prototypage. Le moteur d'innovation qui transforme les idées en produits concrets.",
    color: "from-dc-orange to-dc-orange-light",
  },
  {
    icon: Wifi,
    name: "Ivoire Connect",
    abbr: "IConn",
    role: "La plateforme de connectivité",
    description: "Réseaux, interconnexion et services numériques. L'infrastructure qui relie l'ensemble de l'écosystème.",
    color: "from-dc-blue-light to-dc-orange",
  },
];

const GroupStructure = () => (
  <section id="groupe" className="py-24 bg-section-dark">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Structure du groupe</p>
        <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground">
          Un écosystème intégré
        </h2>
        <p className="mt-4 text-primary-foreground/60 max-w-2xl mx-auto">
          Trois entités complémentaires au service de la transformation numérique africaine.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {entities.map((e) => (
          <div
            key={e.abbr}
            className="relative group rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-8 hover:border-secondary/40 transition-all duration-300"
          >
            <div className={`p-3 rounded-xl bg-gradient-to-br ${e.color} w-fit mb-6`}>
              <e.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <h3 className="font-display text-xl font-bold text-primary-foreground">{e.name}</h3>
              <span className="text-secondary text-sm font-semibold">({e.abbr})</span>
            </div>
            <p className="text-secondary/80 text-sm font-medium mb-3">{e.role}</p>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GroupStructure;
