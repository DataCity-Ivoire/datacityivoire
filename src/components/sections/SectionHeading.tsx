import Reveal from "@/components/Reveal";
import AnimatedHeading from "@/components/AnimatedHeading";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** En-tête de section commun au site une page (remplace l'ancien PageHero). */
const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="mx-auto max-w-2xl text-center">
    <Reveal>
      <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </span>
    </Reveal>
    <AnimatedHeading className="mt-4 font-display text-3xl font-bold leading-tight lg:text-5xl">
      {title}
    </AnimatedHeading>
    {description && (
      <Reveal delay={0.12}>
        <p className="mt-5 text-muted-foreground">{description}</p>
      </Reveal>
    )}
  </div>
);

export default SectionHeading;
