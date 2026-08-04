import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  to: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

const MagneticButton = ({ to, children, variant = "primary", className }: MagneticButtonProps) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (rect.left + rect.width / 2)) * 0.18,
      y: (e.clientY - (rect.top + rect.height / 2)) * 0.28,
    });
  };

  return (
    <motion.div
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="inline-flex"
    >
      <Link
        ref={ref}
        to={to}
        onMouseMove={handleMove}
        onMouseLeave={() => setOffset({ x: 0, y: 0 })}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-colors duration-300 min-h-11",
          variant === "primary"
            ? "bg-gradient-brand text-accent-foreground hover:shadow-glow"
            : "border border-border bg-background/40 text-foreground hover:border-accent hover:text-accent",
          className,
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default MagneticButton;
