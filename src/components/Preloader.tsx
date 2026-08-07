import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Logo from "@/components/Logo";

const MAX_DURATION = 9000;

const Preloader = () => {
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(!reduce);
  const [mounted, setMounted] = useState(!reduce);

  useEffect(() => {
    if (reduce) return;

    let raf = 0;
    let current = 0;
    let loaded = document.readyState === "complete";
    const start = performance.now();

    const onLoad = () => {
      loaded = true;
    };
    window.addEventListener("load", onLoad);

    const tick = () => {
      const elapsed = performance.now() - start;
      // Monte jusqu'à 90 % en attendant la fin du chargement, puis file à 100 %.
      const target = loaded || elapsed > MAX_DURATION ? 100 : Math.min(92, (elapsed / 3400) * 92);
      current += (target - current) * 0.035;
      if (current > 99.4) current = 100;

      setProgress(current);

      if (current >= 100) {
        window.setTimeout(() => setVisible(false), 500);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Filet de sécurité : si rAF est suspendu (onglet en arrière-plan), on libère
    // quand même la page au lieu de rester bloqué sur l'écran de chargement.
    const failsafe = window.setTimeout(() => {
      setProgress(100);
      setVisible(false);
    }, MAX_DURATION + 1500);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(failsafe);
      window.removeEventListener("load", onLoad);
    };
  }, [reduce]);

  // Démontage garanti, même si l'animation de sortie ne peut pas s'exécuter.
  useEffect(() => {
    if (visible) return;
    const timer = window.setTimeout(() => setMounted(false), 1200);
    return () => window.clearTimeout(timer);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [visible]);

  const value = Math.round(progress);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gradient-deep text-white"
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
          <div className="absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[120px]" />
          <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-secondary/20 blur-[120px]" />

          {/* Identité + barre de progression */}
          <div className="relative flex flex-col items-center gap-7 px-6">
            <motion.div
              className="flex items-center gap-2.5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Halo pulsant derrière le logo */}
              <span className="relative">
                <span
                  className="animate-halo absolute -inset-8 rounded-full bg-accent/40 blur-[60px]"
                  aria-hidden="true"
                />
                <Logo textClassName="text-white" markClassName="h-12" className="relative" />
              </span>
            </motion.div>

            <div className="h-[5px] w-52 overflow-hidden rounded-full bg-white/15 sm:w-64">
              <div
                className="h-full rounded-full bg-gradient-brand transition-[width] duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <motion.p
              className="text-xs font-medium uppercase tracking-[0.25em] text-white/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              L'Afrique connectée
            </motion.p>
          </div>

          {/* Compteur géant qui déborde en bas à gauche */}
          <span className="pointer-events-none absolute bottom-0 left-0 -translate-x-[0.06em] translate-y-[0.16em] font-display text-[22vw] font-bold leading-[0.8] tracking-tighter text-white/95 sm:text-[15vw]">
            {String(value).padStart(3, "0")}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
