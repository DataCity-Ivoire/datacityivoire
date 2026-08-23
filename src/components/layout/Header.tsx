import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navigation } from "@/data/site";
import Logo from "@/components/Logo";
import { useContactDialog } from "@/components/contact/ContactDialogProvider";
import { cn } from "@/lib/utils";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("accueil");
  const location = useLocation();
  const navigate = useNavigate();
  const { open: openContact } = useContactDialog();

  const onHomePage = location.pathname === "/";

  useEffect(() => setOpen(false), [location.pathname]);

  // Bloque le défilement de la page tant que le menu plein écran est ouvert.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Met en évidence la section en cours de lecture.
  useEffect(() => {
    if (!onHomePage) return;
    const targets = navigation
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.5] },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [onHomePage]);

  /** Défile jusqu'à la section, ou revient d'abord à l'accueil si on est ailleurs. */
  const goToSection = useCallback(
    (id: string) => {
      setOpen(false);
      // Le menu mobile pose `overflow: hidden` sur le body tant qu'il est ouvert
      // (voir l'effet ci-dessus) et ne le retire que lorsque son propre effet de
      // nettoyage s'exécute — de façon asynchrone, après ce gestionnaire. Sans ce
      // reset immédiat, `scrollIntoView` ci-dessous s'exécute pendant que le body
      // est encore bloqué et n'a alors aucun effet : la page ne défile jamais.
      document.body.style.overflow = "";
      if (!onHomePage) {
        navigate(`/#${id}`);
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", id === "accueil" ? "/" : `/#${id}`);
    },
    [navigate, onHomePage],
  );

  const linkTone = (isActive: boolean) =>
    isActive
      ? "text-accent"
      : scrolled
        ? "text-foreground/70 hover:text-foreground"
        : "text-white/70 hover:text-white";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* `.glass` pose un `backdrop-filter`, ce qui transforme l'élément en
          conteneur de positionnement pour ses descendants `fixed` (au lieu du
          viewport) — si cette classe était sur le <header> lui-même, le menu
          mobile plein écran ci-dessous (position: fixed) se retrouverait
          confiné à la hauteur de cette barre une fois la page scrollée, donc
          invisible. Elle est donc posée sur ce wrapper interne, qui ne
          contient que la barre du haut — jamais sur <header>. */}
      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "glass shadow-elevated" : "bg-transparent border-b border-transparent",
        )}
      >
        {/* Les deux colonnes latérales sont en `flex-1` : quelle que soit la
            largeur du logo ou des actions, elles se partagent l'espace restant
            à parts égales, donc la nav centrale reste toujours centrée sur la
            ligne — pas seulement dans l'espace qu'il reste entre les deux. */}
        <div className="container mx-auto flex h-18 items-center px-4 py-3">
          <div className="flex flex-1 items-center">
            <Link to="/" aria-label="Data City Ivoire — accueil">
              <Logo textClassName={scrolled ? "text-foreground" : "text-white"} />
            </Link>
          </div>

          <nav className="hidden shrink-0 items-center gap-1 lg:flex" aria-label="Navigation principale">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSection(item.id)}
                aria-current={onHomePage && active === item.id ? "true" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  linkTone(onHomePage && active === item.id),
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-2">
            <button
              type="button"
              onClick={openContact}
              className="group hidden min-h-11 items-center rounded-full bg-gradient-brand px-5 text-sm font-semibold text-accent-foreground transition-shadow hover:shadow-glow sm:inline-flex"
            >
              Nous contacter
              {/* La flèche apparaît en glissant au survol */}
              <span className="grid w-0 place-items-center overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:ml-2 group-hover:w-4 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4 shrink-0" />
              </span>
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden",
                scrolled ? "border-border/60 text-foreground" : "border-white/25 text-white",
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 -z-10 h-screen overflow-y-auto bg-gradient-deep lg:hidden"
          >
            <div className="absolute inset-0 grid-pattern opacity-[0.06]" aria-hidden="true" />
            <div
              className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-accent/20 blur-[110px]"
              aria-hidden="true"
            />

            <nav
              className="container relative mx-auto flex min-h-screen flex-col justify-center gap-1 px-4 pb-24 pt-28"
              aria-label="Navigation mobile"
            >
              {navigation.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    type="button"
                    onClick={() => goToSection(item.id)}
                    className={cn(
                      "group flex min-h-14 w-full items-center font-display text-3xl font-bold tracking-tight transition-colors sm:text-4xl",
                      onHomePage && active === item.id ? "text-accent" : "text-white hover:text-accent",
                    )}
                  >
                    {/* La flèche apparaît en glissant au survol */}
                    <span className="grid w-0 place-items-center overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:mr-3 group-hover:w-7 group-hover:opacity-100">
                      <ArrowRight className="h-6 w-6 shrink-0" />
                    </span>
                    {item.label}
                  </button>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + navigation.length * 0.06, duration: 0.5 }}
                className="mt-8"
              >
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openContact();
                  }}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-brand px-7 text-sm font-semibold text-accent-foreground"
                >
                  Nous contacter <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
