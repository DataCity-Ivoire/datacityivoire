import Reveal from "@/components/Reveal";
import { faq } from "@/data/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => (
  <section className="bg-background py-24">
    <div className="container mx-auto px-4">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
        <h2 className="mt-4 font-display text-3xl font-bold lg:text-4xl">
          Les questions que l'on nous pose
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Une autre question ? Notre équipe vous répond sous 48 heures ouvrées.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faq.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-base font-semibold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
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
