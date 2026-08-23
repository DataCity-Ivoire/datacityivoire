import { Phone } from "lucide-react";
import HoverArrow from "@/components/HoverArrow";
import { useContactDialog } from "@/components/contact/ContactDialogProvider";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { site } from "@/data/site";

const CtaSection = () => {
  const { open: openContact } = useContactDialog();

  return (
    <section className="bg-surface pb-16 sm:pb-20 lg:pb-24">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-deep px-6 py-12 text-center text-white sm:rounded-3xl sm:px-8 sm:py-16 lg:px-16 lg:py-20">
            <div className="absolute inset-0 grid-pattern opacity-[0.07]" aria-hidden="true" />
            {/* Lueurs aux coins : mêmes tokens que Hero/PageHero (accent + secondary),
                pour rester dans le même langage visuel que le reste du site. */}
            <div
              className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-[80px] sm:-left-24 sm:-top-24 sm:h-72 sm:w-72 sm:blur-[100px]"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-secondary/20 blur-[80px] sm:-bottom-24 sm:-right-24 sm:h-72 sm:w-72 sm:blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative">
              <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:px-4 sm:py-1.5 sm:text-xs">
                Passez à l'action
              </span>

              <h2 className="mx-auto mt-4 max-w-3xl font-display text-2xl font-bold leading-tight sm:mt-6 sm:text-3xl lg:text-5xl">
                Prêt à accélérer votre <span className="text-gradient">transformation numérique</span> ?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 sm:mt-5">
                Échangeons sur votre projet. Notre équipe d'experts vous proposera une approche sur
                mesure adaptée à vos objectifs et votre contexte.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
                <MagneticButton onClick={openContact}>
                  Discutons de votre projet <HoverArrow />
                </MagneticButton>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:border-accent hover:bg-accent/10 sm:min-h-11 sm:px-7 sm:py-3.5 sm:text-sm"
                >
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
