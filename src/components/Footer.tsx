const links = [
  { label: "Services", href: "#services" },
  { label: "Le Groupe", href: "#groupe" },
  { label: "Approche", href: "#approche" },
  { label: "Feuille de route", href: "#roadmap" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-primary py-12 border-t border-dc-blue-light/20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="font-display text-xl font-bold text-primary-foreground">
            Data City <span className="text-gradient">Ivoire</span>
          </span>
          <p className="text-primary-foreground/50 text-sm mt-1">
            L'Afrique connectée, intelligente et souveraine
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-8 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/40">
        <p>© {new Date().getFullYear()} Data City Ivoire. Tous droits réservés.</p>
        <a href="mailto:contact@datacityivoire.ci" className="hover:text-secondary transition-colors">
          contact@datacityivoire.ci
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
