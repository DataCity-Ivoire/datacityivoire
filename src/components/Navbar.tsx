import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Le Groupe", href: "#groupe" },
  { label: "Approche", href: "#approche" },
  { label: "Feuille de route", href: "#roadmap" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-dc-blue-light/20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-primary-foreground">
            Data City <span className="text-gradient">Ivoire</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-orange text-secondary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Nous contacter
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary/98 backdrop-blur-md border-t border-dc-blue-light/20 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-primary-foreground/70 hover:text-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-gradient-orange text-secondary-foreground px-5 py-2 rounded-lg text-sm font-semibold"
            >
              Nous contacter
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
