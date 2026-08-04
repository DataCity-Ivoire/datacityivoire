import Reveal from "@/components/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

const PageHero = ({ eyebrow, title, description }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-gradient-deep pb-20 pt-36 text-primary-foreground">
    <div className="absolute inset-0 grid-pattern opacity-[0.06]" aria-hidden="true" />
    <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
    <div className="container relative mx-auto px-4">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
          {description}
        </p>
      </Reveal>
    </div>
  </section>
);

export default PageHero;
