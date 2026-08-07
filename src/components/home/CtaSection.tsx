import { Phone } from "lucide-react";
import HoverArrow from "@/components/HoverArrow";
import { useContactDialog } from "@/components/contact/ContactDialogProvider";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { site } from "@/data/site";

const CtaSection = () => {
  const { open: openContact } = useContactDialog();

  return (
    <section className="bg-surface pb-24">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-deep px-8 py-16 text-center text-white lg:px-16 lg:py-20">
            <div className="absolute inset-0 grid-pattern opacity-[0.07]" aria-hidden="true" />
            {/* Lueurs aux coins : mêmes tokens que Hero/PageHero (accent + secondary),
                pour rester dans le même langage visuel que le reste du site. */}
            <div
              className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px]"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-secondary/20 blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative">
              <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Passez à l'action
              </span>

              <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold leading-tight lg:text-5xl">
                Prêt à accélérer votre <span className="text-gradient">transformation numérique</span> ?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-white/70">
                Échangeons sur votre projet. Notre équipe d'experts vous proposera une approche sur
                mesure adaptée à vos objectifs et votre contexte.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton onClick={openContact}>
                  Discutons de votre projet <HoverArrow />
                </MagneticButton>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent hover:bg-accent/10"
                >
                  <Phone className="h-4 w-4" />
                  Appelez-nous
                </a>
              </div>

              <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
                {[].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-success/20 text-success">
                      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" aria-hidden="true">
                        <path
                          d="M2.5 6.5L4.75 8.75L9.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaSection;
