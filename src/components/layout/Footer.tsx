import { Link } from "react-router-dom";
import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useContactDialog } from "@/components/contact/ContactDialogProvider";

/** Icône X : absente de lucide-react, tracée à la main. */
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SOCIAL_ICONS: Record<string, LucideIcon | typeof XIcon> = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  x: XIcon,
  youtube: Youtube,
  github: Github,
};
import { allSections, site, expertises } from "@/data/site";
import Logo from "@/components/Logo";

const Footer = () => {
  const { open: openContact } = useContactDialog();

  return (
  <footer className="bg-gradient-deep text-white">
    <div className="container mx-auto grid gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <Logo textClassName="text-white" markClassName="h-11" />
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
          {site.slogan} Nous construisons des solutions numériques durables au service des
          organisations africaines.
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {site.socials.map((s) => {
            const Icon = SOCIAL_ICONS[s.icon];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                title={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Navigation</h2>
        <ul className="mt-4 space-y-2.5 text-sm text-white/60">
          {allSections.map((l) => (
            <li key={l.id}>
              {l.id === "contact" ? (
                <button
                  type="button"
                  onClick={openContact}
                  className="transition-colors hover:text-accent"
                >
                  {l.label}
                </button>
              ) : (
                <a href={`/#${l.id}`} className="transition-colors hover:text-accent">
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Expertises</h2>
        <ul className="mt-4 space-y-2.5 text-sm text-white/60">
          {expertises.slice(0, 7).map((e) => (
            <li key={e.title}>
              <a href="/#expertises" className="transition-colors hover:text-accent">
                {e.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</h2>
        <ul className="mt-4 space-y-3 text-sm text-white/60">
          <li className="flex items-start gap-2.5">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {site.address}
          </li>
          <li className="flex items-start gap-2.5">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              {site.email}
            </a>
          </li>
          <li className="flex items-start gap-2.5">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-accent">
              {site.phone}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-white/45 md:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link to="/mentions-legales" className="hover:text-accent">
            Mentions légales
          </Link>
          <Link to="/politique-confidentialite" className="hover:text-accent">
            Politique de confidentialité
          </Link>
          <span>🇨🇮 Conçu en Côte d'Ivoire, pour l'Afrique</span>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
