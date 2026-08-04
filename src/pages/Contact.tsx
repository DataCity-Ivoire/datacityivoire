import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = new FormData(e.currentTarget);
    const subject = `Demande de projet — ${form.get("name")}`;
    const body = `Nom : ${form.get("name")}\nEmail : ${form.get("email")}\nEntreprise : ${form.get("company")}\n\n${form.get("message")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Votre message est prêt à être envoyé depuis votre messagerie.");
    setSending(false);
  };

  return (
    <>
      <Seo
        title="Contact | Data City Ivoire"
        description="Contactez Data City Ivoire à Abidjan pour cadrer votre projet data, IA ou transformation numérique."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Décrivez-nous votre besoin en quelques lignes. Nous revenons vers vous sous 48 heures ouvrées."
      />

      <section className="bg-background py-24">
        <div className="container mx-auto grid gap-14 px-4 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-bold">Nos coordonnées</h2>
            <ul className="mt-8 space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-muted-foreground">{site.address}</span>
              </li>
              <li className="flex gap-4">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-4">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-muted-foreground hover:text-accent"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-8 shadow-elevated"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" name="name" required placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email professionnel</Label>
                  <Input id="email" name="email" type="email" required placeholder="vous@entreprise.ci" />
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="company">Organisation</Label>
                <Input id="company" name="company" placeholder="Nom de votre organisation" />
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Votre projet</Label>
                <Textarea id="message" name="message" required rows={6} placeholder="Décrivez votre besoin..." />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-brand px-7 text-sm font-semibold text-accent-foreground transition-shadow hover:shadow-glow disabled:opacity-60"
              >
                Envoyer le message <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
