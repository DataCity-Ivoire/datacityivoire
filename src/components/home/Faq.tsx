import Reveal from "@/components/Reveal";
import { faq } from "@/data/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => (
  <section className="bg-background py-16 sm:py-20 lg:py-24">
    <div className="container mx-auto px-4">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">FAQ</p>
        <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:mt-4 sm:text-3xl lg:text-4xl">
          Les questions que l'on nous pose
        </h2>
        <p className="mt-3 text-xs text-muted-foreground sm:mt-4 sm:text-sm">
          Une autre question ? Notre équipe vous répond sous 48 heures ouvrées.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 max-w-3xl sm:mt-10 lg:mt-12">
        <Accordion type="single" collapsible className="w-full">
          {faq.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-sm font-semibold sm:text-base">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);

export default Faq;
