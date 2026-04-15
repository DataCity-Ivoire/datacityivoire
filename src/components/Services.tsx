import { BarChart3, LayoutDashboard, Rocket, Brain } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Analyse de données",
    description: "Transformez vos données brutes en insights stratégiques grâce à des analyses avancées.",
    benefit: "Décisions éclairées et rapides",
  },
  {
    icon: LayoutDashboard,
    title: "Création de dashboards",
    description: "Des tableaux de bord interactifs et visuels pour piloter votre activité en temps réel.",
    benefit: "Visibilité complète sur vos KPIs",
  },
  {
    icon: Rocket,
    title: "Transformation digitale",
    description: "Accompagnement complet dans la modernisation de vos processus et outils numériques.",
    benefit: "Gain d'efficacité opérationnelle",
  },
  {
    icon: Brain,
    title: "Data & IA Consulting",
    description: "Conseil stratégique en intelligence artificielle appliquée à vos enjeux métier.",
    benefit: "Innovation et avantage compétitif",
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Nos services</p>
        <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground">
          Des solutions sur mesure
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Nous accompagnons entreprises et institutions dans l'exploitation intelligente de leurs données.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-2xl p-6 border border-border hover:border-secondary/40 hover:shadow-glow transition-all duration-300"
          >
            <div className="p-3 rounded-xl bg-gradient-orange w-fit mb-5">
              <s.icon className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.description}</p>
            <p className="text-secondary text-sm font-semibold">→ {s.benefit}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
