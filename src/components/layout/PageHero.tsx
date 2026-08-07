import { lazy, Suspense } from "react";
import Reveal from "@/components/Reveal";
import AnimatedHeading from "@/components/AnimatedHeading";

const SilkRibbonCanvas = lazy(() => import("@/components/SilkRibbonCanvas"));

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

const PageHero = ({ eyebrow, title, description }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-gradient-deep pb-20 pt-36 text-white">
    {/* Fond soyeux + ruban : palette sombre forcée, ce bandeau est toujours sombre. */}
    <div className="pointer-events-none absolute inset-0 opacity-30">
      <Suspense fallback={null}>
        <SilkRibbonCanvas forceDark />
      </Suspense>
    </div>

    {/* Voile : sans lui, le ruban passe derrière le titre et le rend illisible. */}
    <div
      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[hsl(213_72%_8%)]/80 via-[hsl(213_72%_8%)]/55 to-[hsl(213_72%_8%)]/85"
      aria-hidden="true"
    />

    <div className="absolute inset-0 grid-pattern opacity-[0.06]" aria-hidden="true" />
    <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />

    <div className="container relative mx-auto px-4 text-center">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      </Reveal>
      <AnimatedHeading
        as="h1"
        className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-tight lg:text-6xl"
      >
        {title}
      </AnimatedHeading>
      <Reveal delay={0.15}>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{description}</p>
      </Reveal>
    </div>
  </section>
);

export default PageHero;
