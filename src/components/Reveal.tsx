import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  /** Rejoue l'animation à l'envers quand l'élément repasse sous la ligne de flottaison. */
  reversible?: boolean;
}

const Reveal = ({ children, delay = 0, className, y = 60, reversible = true }: RevealProps) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduce) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          return;
        }
        if (!reversible) return;

        // On ne masque que si l'élément est redescendu SOUS le viewport,
        // c'est-à-dire quand on remonte. S'il sort par le haut (on a déjà
        // scrollé au-delà), il reste visible : sinon tout le haut de la page
        // se remettrait à clignoter pendant la descente.
        if (entry.boundingClientRect.top > 0) setVisible(false);
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduce, reversible]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, scale: 0.96 }}
      animate={
        visible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y, scale: 0.96 }
      }
      transition={{
        duration: 0.9,
        // Le décalage ne sert qu'à l'apparition : à la disparition, tout part ensemble.
        delay: visible ? delay : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
