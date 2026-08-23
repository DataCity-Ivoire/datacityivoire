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
    <section className="relative overflow-hidden bg-gradient-deep pb-20 pt-24 text-white sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-44">
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" aria-hidden="true" />
      <div className="absolute -right-20 top-0 h-[24rem] w-[24rem] rounded-full bg-accent/20 blur-[100px] sm:-right-32 sm:h-[32rem] sm:w-[32rem] lg:h-[40rem] lg:w-[40rem]" aria-hidden="true" />
      <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-secondary/20 blur-[100px] sm:-left-24 sm:h-96 sm:w-96 sm:blur-[120px] lg:h-[28rem] lg:w-[28rem]" aria-hidden="true" />

      <div className="container relative mx-auto grid items-center justify-center gap-8 px-4 lg:grid-cols-[1.05fr_1fr] lg:gap-16 sm:px-6">
        <div className="order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/80 backdrop-blur-sm sm:gap-2.5 sm:px-4 sm:py-1.5 sm:text-xs"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-blink absolute inline-flex h-full w-full rounded-full bg-success" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="hidden sm:inline">Entreprise technologique africaine</span>
            <span className="sm:hidden">Tech africaine</span>
            <Sparkles className="h-3 w-3 text-accent sm:h-3.5 sm:w-3.5" />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display text-2xl font-bold leading-[1.15] sm:mt-6 sm:text-3xl sm:leading-[1.1] lg:text-[4.1rem]"
          >
            L'Afrique connectée,{" "}
            <span className="text-gradient">intelligente</span> et souveraine.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base sm:text-lg"
          >
            Data City Ivoire accompagne entreprises et institutions dans la valorisation de leurs
            données et la construction de plateformes numériques fiables, sécurisées et durables.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4"
          >
            <MagneticButton onClick={openContact}>
              Démarrer un projet <HoverArrow />
            </MagneticButton>
            <a
              href="/#expertises"
              onClick={onSectionLink("expertises")}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:border-accent hover:bg-white/[0.12] hover:text-accent sm:min-h-11 sm:px-5 sm:py-3 sm:text-sm sm:px-7 sm:py-3.5"
            >
              Découvrir nos expertises
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 grid max-w-lg grid-cols-3 gap-3 border-t border-white/10 pt-4 sm:mt-12 sm:gap-4 sm:pt-6 lg:mt-14 lg:gap-6 lg:pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-lg font-bold text-accent sm:text-xl lg:text-2xl lg:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-[9px] text-white/60 sm:text-[10px] sm:text-xs">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 mx-auto aspect-square w-full max-w-[320px] sm:order-2 sm:max-w-[400px] lg:mx-0 lg:max-w-none"
        >
          <div className={`aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-elevated sm:rounded-3xl ${reduce ? "" : "animate-float"}`}>
            <Suspense fallback={null}>
              <AfricaCanvas />
            </Suspense>
          </div>
          <div className="glass-dark absolute -bottom-4 -left-3 hidden rounded-xl px-4 py-3 sm:-bottom-6 sm:-left-4 sm:rounded-2xl sm:px-5 sm:py-4 lg:block">
            <p className="text-[10px] uppercase tracking-wider text-accent sm:text-xs">Souveraineté numérique</p>
            <p className="mt-1 text-xs text-white/80 sm:text-sm">Vos données, vos règles.</p>
          </div>
        </motion.div>
      </div>

      {/* Indicateur de défilement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative mt-12 flex flex-col items-center gap-3 sm:mt-16 lg:mt-24"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/45 sm:text-[0.65rem]">Découvrir</span>
        <span className="relative h-8 w-px overflow-hidden bg-white/15 sm:h-10" aria-hidden="true">
          <span className="animate-scroll-hint absolute inset-x-0 top-0 h-3 sm:h-4 bg-accent" />
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
