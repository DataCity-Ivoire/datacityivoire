import { Zap, Shield, Star, Users, Globe } from "lucide-react";

const values = [
  { icon: Zap, label: "Innovation" },
  { icon: Shield, label: "Souveraineté" },
  { icon: Star, label: "Excellence" },
  { icon: Users, label: "Proximité" },
  { icon: Globe, label: "Fierté Africaine" },
];

const Infrastructure = () => (
  <section className="py-24 bg-section-dark relative overflow-hidden">
    {/* Decorative glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
          Infrastructure & Souveraineté
        </p>
        <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Concevoir une infrastructure numérique à l'image de l'Afrique
        </h2>
        <p className="text-primary-foreground/60 leading-relaxed">
          Une grande partie des données africaines est aujourd'hui hébergée, traitée et exploitée hors du continent.
          Data City Ivoire répond à cet enjeu de souveraineté avec une approche intégrée, progressive et adaptée aux réalités locales.
        </p>
        <p className="mt-4 text-primary-foreground/60 leading-relaxed">
          En déployant des infrastructures et services numériques localement maîtrisés, le groupe soutient le développement économique, social et institutionnel de la Côte d'Ivoire et du continent.
        </p>
      </div>

      {/* Values */}
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {values.map((v) => (
          <div
            key={v.label}
            className="flex items-center gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full px-6 py-3 hover:border-secondary/40 transition-colors"
          >
            <v.icon className="w-5 h-5 text-secondary" />
            <span className="text-primary-foreground font-medium text-sm">{v.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Infrastructure;
