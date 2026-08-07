import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  /** Destination du lien. Omettre pour obtenir un bouton (avec `onClick`). */
  to?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

const MagneticButton = ({ to, onClick, children, variant = "primary", className }: MagneticButtonProps) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (rect.left + rect.width / 2)) * 0.18,
      y: (e.clientY - (rect.top + rect.height / 2)) * 0.28,
    });
  };

  const classes = cn(
    "group inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300 min-h-11",
    variant === "primary"
      ? "bg-gradient-brand text-accent-foreground hover:shadow-glow"
      : "border border-border bg-background/40 text-foreground hover:border-accent hover:text-accent",
    className,
  );

  const shared = {
    onMouseMove: handleMove,
    onMouseLeave: () => setOffset({ x: 0, y: 0 }),
    className: classes,
  };

  return (
    <motion.div
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="inline-flex"
    >
      {to ? (
        <Link ref={ref as React.RefObject<HTMLAnchorElement>} to={to} {...shared}>
          {children}
        </Link>
      ) : (
        <button
          ref={ref as React.RefObject<HTMLButtonElement>}
          type="button"
          onClick={onClick}
          {...shared}
        >
          {children}
        </button>
      )}
    </motion.div>
  );
};

export default MagneticButton;
