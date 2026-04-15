import { AlertTriangle, BarChart3, Database, Target } from "lucide-react";

const problems = [
  { icon: AlertTriangle, text: "Données non exploitées" },
  { icon: Target, text: "Décisions approximatives" },
  { icon: Database, text: "Outils dispersés et fragmentés" },
];

const solutions = [
  { icon: BarChart3, text: "Tableaux de bord intelligents" },
  { icon: Database, text: "Centralisation des données" },
  { icon: Target, text: "Aide à la décision stratégique" },
];

const ProblemSolution = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Problem */}
        <div>
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Le constat</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Les entreprises africaines méritent mieux
          </h2>
          <div className="space-y-6">
            {problems.map((p) => (
              <div key={p.text} className="flex items-start gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                <div className="p-2 rounded-lg bg-destructive/10">
                  <p.icon className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-foreground/80 font-medium">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div>
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Notre réponse</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Une plateforme unifiée et souveraine
          </h2>
          <div className="space-y-6">
            {solutions.map((s) => (
              <div key={s.text} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/5 border border-secondary/20">
                <div className="p-2 rounded-lg bg-gradient-orange">
                  <s.icon className="w-5 h-5 text-secondary-foreground" />
                </div>
                <p className="text-foreground/80 font-medium">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSolution;
