import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedHeadingProps {
  children: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  /** Granularité de la révélation : par mot (défaut) ou par caractère. */
  split?: "word" | "char";
}

const EASE = [0.22, 1, 0.36, 1] as const;

const AnimatedHeading = ({ children, as = "h2", className, split = "word" }: AnimatedHeadingProps) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);
  const Tag = as;
  const text = children.trim();
  const words = text.split(/\s+/);

  useEffect(() => {
    if (reduce) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    // On observe le titre lui-même : les fragments sont décalés hors de leur
    // masque `overflow-hidden`, donc rognés à surface nulle — un observateur
    // posé sur eux ne les verrait jamais entrer dans le viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduce]);

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  const hidden = { y: "110%", opacity: 0 };
  const shown = { y: "0%", opacity: 1 };
  let charIndex = 0;

  // Le texte est découpé en fragments : on expose le libellé complet aux
  // lecteurs d'écran et on masque les fragments, sinon la lecture est hachée.
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, w) => {
        const wordDelay = w * 0.055;

        const content =
          split === "char"
            ? [...word].map((char, c) => {
                const delay = charIndex * 0.028;
                charIndex += 1;
                return (
                  <motion.span
                    key={`${char}-${c}`}
                    className="inline-block"
                    initial={hidden}
                    animate={visible ? shown : hidden}
                    transition={{ duration: 0.65, delay: visible ? delay : 0, ease: EASE }}
                  >
                    {char}
                  </motion.span>
                );
              })
            : (
              <motion.span
                className="inline-block"
                initial={hidden}
                animate={visible ? shown : hidden}
                transition={{ duration: 0.7, delay: visible ? wordDelay : 0, ease: EASE }}
              >
                {word}
              </motion.span>
            );

        if (split === "char") charIndex += 1; // espace entre les mots

        // L'espace doit rester HORS du conteneur `inline-block` : un espace
        // final à l'intérieur d'une boîte inline-block est rogné par les
        // règles de repli des espaces CSS, ce qui collait tous les mots.
        return (
          <span key={`${word}-${w}`} aria-hidden="true">
            <span className="inline-block overflow-hidden align-bottom">{content}</span>
            {w < words.length - 1 ? " " : null}
          </span>
        );
      })}
    </Tag>
  );
};

export default AnimatedHeading;
