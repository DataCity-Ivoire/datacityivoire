import { lazy, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import HoverArrow from "@/components/HoverArrow";
import { useContactDialog } from "@/components/contact/ContactDialogProvider";
import { onSectionLink } from "@/lib/scroll";
import MagneticButton from "@/components/MagneticButton";

const AfricaCanvas = lazy(() => import("@/components/AfricaCanvas"));

const stats = [
  { value: "10+", label: "Domaines d'expertise" },
  { value: "100%", label: "Solutions sur mesure" },
  { value: "2050", label: "Horizon souveraineté" },
];

const Hero = () => {
  const reduce = useReducedMotion();
  const { open: openContact } = useContactDialog();

  return (
    <section className="relative overflow-hidden bg-gradient-deep pb-24 pt-36 text-white lg:pb-32 lg:pt-44">
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" aria-hidden="true" />
      <div className="absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[120px]" aria-hidden="true" />
      <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-secondary/20 blur-[120px]" aria-hidden="true" />

      <div className="container relative mx-auto grid items-center gap-16 px-4 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-blink absolute inline-flex h-full w-full rounded-full bg-success" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Entreprise technologique africaine
            <Sparkles className="h-3.5 w-3.5 text-accent" />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[4.1rem]"
          >
            L'Afrique connectée,{" "}
            <span className="text-gradient">intelligente</span> et souveraine.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Data City Ivoire accompagne entreprises et institutions dans la valorisation de leurs
            données et la construction de plateformes numériques fiables, sécurisées et durables.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton onClick={openContact}>
              Démarrer un projet <HoverArrow />
            </MagneticButton>
            <a
              href="/#expertises"
              onClick={onSectionLink("expertises")}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-accent hover:bg-white/[0.12] hover:text-accent"
            >
              Découvrir nos expertises
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-accent lg:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-white/60">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className={`aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-elevated ${reduce ? "" : "animate-float"}`}>
            <Suspense fallback={null}>
              <AfricaCanvas />
            </Suspense>
          </div>
          <div className="glass-dark absolute -bottom-6 -left-4 hidden rounded-2xl px-5 py-4 sm:block">
            <p className="text-xs uppercase tracking-wider text-accent">Souveraineté numérique</p>
            <p className="mt-1 text-sm text-white/80">Vos données, vos règles.</p>
          </div>
        </motion.div>
      </div>

      {/* Indicateur de défilement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative mt-16 flex flex-col items-center gap-3 lg:mt-24"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-white/45">Découvrir</span>
        <span className="relative h-10 w-px overflow-hidden bg-white/15" aria-hidden="true">
          <span className="animate-scroll-hint absolute inset-x-0 top-0 h-4 bg-accent" />
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
