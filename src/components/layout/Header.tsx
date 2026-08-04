import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navigation } from "@/data/site";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-elevated" : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container mx-auto flex h-18 items-center justify-between gap-6 px-4 py-3">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Data City Ivoire — accueil">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-sm font-bold text-accent-foreground">
            DC
          </span>
          <span className="font-display text-lg font-bold leading-tight">
            Data City <span className="text-gradient">Ivoire</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-accent" : "text-foreground/70 hover:text-foreground",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden min-h-11 items-center gap-2 rounded-xl bg-gradient-brand px-5 text-sm font-semibold text-accent-foreground transition-shadow hover:shadow-glow sm:inline-flex"
          >
            Démarrer un projet <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-md lg:hidden"
          >
            <nav className="container mx-auto flex flex-col px-4 py-4" aria-label="Navigation mobile">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "min-h-11 rounded-lg px-3 py-3 text-base font-medium transition-colors",
                      isActive ? "text-accent" : "text-foreground/80",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
