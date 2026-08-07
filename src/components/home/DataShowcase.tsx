import { Layers } from "lucide-react";
import Reveal from "@/components/Reveal";
import HoverArrow from "@/components/HoverArrow";
import AnimatedHeading from "@/components/AnimatedHeading";
import { onSectionLink } from "@/lib/scroll";
import illustration from "@/assets/hero-illustration.jpg";

const DataShowcase = () => (
  <section className="relative overflow-hidden bg-background py-24">
    {/* Grandes formes décoratives en arrière-plan */}
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3rem] border-accent/15"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-secondary/15 blur-[110px]"
      aria-hidden="true"
    />

    <div className="container relative mx-auto px-4">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          La donnée en mouvement
        </p>
        <AnimatedHeading className="mt-4 font-display text-3xl font-bold leading-tight lg:text-5xl">
          Un continent, Un Réseau, Une Infrastructure
        </AnimatedHeading>
      </Reveal>

      <Reveal delay={0.1}>
        <figure className="group relative isolate mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-border/60 shadow-elevated">
          <img
            src={illustration}
            alt="Le continent africain représenté comme un réseau de données interconnectées"
            width={1280}
            height={800}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover grayscale transition-all duration-[900ms] ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
          />

          {/* Duotone bleu nuit → orange, teintes fixes pour rester stables en thème sombre */}
          <div
            className="pointer-events-none absolute inset-0 bg-[hsl(213_72%_14%)] mix-blend-screen transition-opacity duration-[900ms] group-hover:opacity-0"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[hsl(32_100%_52%)] mix-blend-multiply transition-opacity duration-[900ms] group-hover:opacity-0"
            aria-hidden="true"
          />

          {/* Voile de lisibilité pour la légende */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[hsl(213_72%_8%)]/85 to-transparent"
            aria-hidden="true"
          />

          <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-6 sm:p-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                <Layers className="h-3 w-3" />
                Illustration
              </span>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
                Centraliser, fiabiliser puis connecter : c'est ainsi qu'une donnée dispersée
                devient une infrastructure de décision.
              </p>
            </div>
            <a
              href="/#expertises"
              onClick={onSectionLink("expertises")}
              className="group inline-flex min-h-11 items-center rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              Nos expertises
              <HoverArrow />
            </a>
          </figcaption>
        </figure>
      </Reveal>
    </div>
  </section>
);

export default DataShowcase;
