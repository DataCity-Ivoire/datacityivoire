import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Eye, Brush, Code2, Download, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

/* Chaque étape porte sa propre couleur, conservée une fois l'étape atteinte.
   Les classes sont écrites en toutes lettres : Tailwind ne peut pas générer
   un nom de classe assemblé dynamiquement, il serait purgé à la compilation. */
const steps = [
  {
    icon: Eye,
    label: "Comprendre",
    title: "Écoute & Discovery",
    text: "Nous analysons votre contexte, vos objectifs et vos contraintes. Ateliers de co-construction, interviews des parties prenantes, audit de l'existant.",
    hex: "#1A6BFF",
    box: "border-[#1A6BFF]/40 bg-[#1A6BFF]/15",
    tint: "text-[#1A6BFF]",
    dot: "bg-[#1A6BFF]",
    bar: "bg-[#1A6BFF]",
  },
  {
    icon: Brush,
    label: "Concevoir",
    title: "Architecture & Design",
    text: "Nous définissons la solution idéale. Architecture technique, UX/UI design, prototypage, validation avec vous avant tout développement.",
    hex: "#00C8B4",
    box: "border-[#00C8B4]/40 bg-[#00C8B4]/15",
    tint: "text-[#00C8B4]",
    dot: "bg-[#00C8B4]",
    bar: "bg-[#00C8B4]",
  },
  {
    icon: Code2,
    label: "Développer",
    title: "Ingénierie & Build",
    text: "Développement agile en sprints courts. Code de qualité, tests automatisés, revues de code rigoureuses. Livraisons continues.",
    hex: "#F5A623",
    box: "border-[#F5A623]/40 bg-[#F5A623]/15",
    tint: "text-[#F5A623]",
    dot: "bg-[#F5A623]",
    bar: "bg-[#F5A623]",
  },
  {
    icon: Download,
    label: "Déployer",
    title: "Mise en production",
    text: "Déploiement progressif, migration des données, supervision des performances et formation de vos utilisateurs.",
    hex: "#7C3AED",
    box: "border-[#7C3AED]/40 bg-[#7C3AED]/15",
    tint: "text-[#7C3AED]",
    dot: "bg-[#7C3AED]",
    bar: "bg-[#7C3AED]",
  },
  {
    icon: Rocket,
    label: "Accompagner",
    title: "Support & Évolution",
    text: "Maintenance évolutive, suivi des indicateurs et transfert de compétences pour que vos équipes restent autonomes.",
    hex: "#F58300",
    box: "border-[#F58300]/40 bg-[#F58300]/15",
    tint: "text-[#F58300]",
    dot: "bg-[#F58300]",
    bar: "bg-[#F58300]",
  },
];

const ApproachSection = () => {
  const [active, setActive] = useState(0);
  const current = steps[active];
  const CurrentIcon = current.icon;

  // Les icônes sont alignées à gauche de leur colonne, pas centrées : on mesure
  // leurs positions réelles plutôt que de les déduire d'un pourcentage.
  const wrapperRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [centers, setCenters] = useState<number[]>([]);

  useLayoutEffect(() => {
    /* On somme les `offsetLeft` plutôt que d'utiliser `getBoundingClientRect` :
       le composant `Reveal` applique un `scale(0.96)` à l'apparition, qui
       fausserait les positions mesurées. `offsetLeft` ignore les transformations. */
    const offsetWithin = (el: HTMLElement, ancestor: HTMLElement) => {
      let x = 0;
      let node: HTMLElement | null = el;
      while (node && node !== ancestor) {
        x += node.offsetLeft;
        node = node.offsetParent as HTMLElement | null;
      }
      return x;
    };

    const measure = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      setCenters(
        boxRefs.current.map((b) => (b ? offsetWithin(b, wrapper) + b.offsetWidth / 2 : 0)),
      );
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  const progressLeft = centers[0] ?? 0;
  const progressWidth = Math.max((centers[active] ?? 0) - progressLeft, 0);
  const progressGradient = `linear-gradient(90deg, ${steps
    .slice(0, Math.max(active + 1, 2))
    .map((s) => s.hex)
    .join(", ")})`;

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:px-4 sm:py-1.5 sm:text-xs">
              Notre processus
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight sm:mt-6 sm:text-3xl lg:text-5xl">
              Notre <span className="text-gradient">Approche</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-5">
              Une méthodologie éprouvée, agile et structurée, qui garantit des livraisons de qualité
              dans les délais et le budget convenus.
            </p>
          </Reveal>
        </div>

        {/* Sélecteur d'étapes */}
        <Reveal delay={0.2}>
          <div ref={wrapperRef} className="relative mt-10 sm:mt-12 lg:mt-16">
            {/* Rail gris de fond, au centre vertical des icônes */}
            <div
              className="absolute inset-x-0 top-6 hidden h-px bg-border sm:top-7 lg:block"
              aria-hidden="true"
            />
            {/* Progression colorée, du centre de la 1re icône à celui de l'étape courante */}
            <div
              className="absolute top-6 hidden h-px transition-all duration-500 ease-out sm:top-7 lg:block"
              style={{
                left: progressLeft,
                width: progressWidth,
                backgroundImage: progressGradient,
              }}
              aria-hidden="true"
            />

            <div
              role="tablist"
              aria-label="Étapes de notre approche"
              className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
            >
              {steps.map((s, i) => {
                const isActive = i === active;
                const isReached = i <= active;
                return (
                  <button
                    key={s.label}
                    role="tab"
                    id={`approche-onglet-${i}`}
                    aria-selected={isActive}
                    aria-controls="approche-panneau"
                    onClick={() => setActive(i)}
                    className="group relative rounded-xl text-left"
                  >
                    <span className="relative inline-block">
                      <span
                        ref={(el) => (boxRefs.current[i] = el)}
                        className={cn(
                          "grid h-12 w-12 place-items-center rounded-xl border transition-colors duration-300 sm:h-14 sm:w-14",
                          isReached ? s.box : "border-border bg-card group-hover:border-border",
                        )}
                      >
                        <s.icon
                          className={cn(
                            "h-4 w-4 transition-colors duration-300 sm:h-5 sm:w-5",
                            isReached ? s.tint : "text-muted-foreground",
                          )}
                        />
                      </span>
                      {/* Pastille de validation, conservée sur les étapes franchies */}
                      {isReached && (
                        <span
                          className={cn(
                            "absolute -right-1 -top-1 h-2 w-2 rounded-full ring-2 ring-background sm:h-2.5 sm:w-2.5",
                            s.dot,
                          )}
                          aria-hidden="true"
                        />
                      )}
                    </span>

                    <span
                      className={cn(
                        "mt-3 block text-[10px] font-semibold transition-colors duration-300 sm:mt-4 sm:text-xs",
                        isActive ? s.tint : "text-muted-foreground",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 block text-xs transition-colors duration-300 sm:text-sm",
                        isActive ? "font-semibold text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {s.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Panneau de détail */}
        <div
          id="approche-panneau"
          role="tabpanel"
          aria-labelledby={`approche-onglet-${active}`}
          className="mt-8 rounded-2xl border border-border bg-card p-5 sm:mt-10 sm:rounded-3xl sm:p-8 lg:p-10"
        >
          {/* Pas d'animation de sortie : le nouveau contenu est monté
              immédiatement au changement de `key`. Avec `AnimatePresence
              mode="wait"`, un rAF suspendu (onglet en arrière-plan) fige le
              panneau sur l'étape précédente. */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 sm:gap-6 sm:flex-row"
          >
              <span
                className={cn(
                  "grid h-12 w-12 shrink-0 place-items-center rounded-xl border sm:h-14 sm:w-14",
                  current.box,
                )}
              >
                <CurrentIcon className={cn("h-5 w-5 sm:h-6 sm:w-6", current.tint)} />
              </span>
              <div>
                <p
                  className={cn(
                    "text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs",
                    current.tint,
                  )}
                >
                  Étape {String(active + 1).padStart(2, "0")} — {current.label}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug sm:text-xl sm:leading-tight">{current.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-3">
                  {current.text}
                </p>
            </div>
          </motion.div>
        </div>

        {/* Pagination : la barre active prend la couleur de son étape */}
        <div className="mt-6 flex items-center justify-center gap-2 sm:mt-8">
          {steps.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Aller à l'étape ${i + 1} : ${s.label}`}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                i === active ? cn("w-6", s.bar) : "w-1 bg-border hover:bg-muted-foreground",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
