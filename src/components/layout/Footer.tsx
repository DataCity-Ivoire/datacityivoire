import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { navigation, site, expertises } from "@/data/site";

const Footer = () => (
  <footer className="bg-gradient-deep text-primary-foreground">
    <div className="container mx-auto grid gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <span className="font-display text-xl font-bold">
          Data City <span className="text-gradient">Ivoire</span>
        </span>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
          {site.slogan} Nous construisons des solutions numériques durables au service des
          organisations africaines.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-lg border border-primary-foreground/15 px-3 py-1.5 text-xs text-primary-foreground/70 transition-colors hover:border-accent hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Navigation</h2>
        <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/60">
          {navigation.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="transition-colors hover:text-accent">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Expertises</h2>
        <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/60">
          {expertises.slice(0, 7).map((e) => (
            <li key={e.title}>
              <Link to="/expertises" className="transition-colors hover:text-accent">
                {e.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</h2>
        <ul className="mt-4 space-y-3 text-sm text-primary-foreground/60">
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

    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-primary-foreground/45 md:flex-row">
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

export default Footer;
