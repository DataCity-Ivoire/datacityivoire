import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Mail, MapPin, Phone, Send } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "border-border/80 bg-background/50 transition-colors focus-visible:border-[rgba(26,107,255,0.5)] focus-visible:ring-2 focus-visible:ring-[rgba(26,107,255,0.5)] focus-visible:ring-offset-0";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (open) return;
    const timer = window.setTimeout(() => setSent(false), 300);
    return () => window.clearTimeout(timer);
  }, [open]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const mailSubject = `Demande de projet — ${form.get("name")}`;
    const body = [
      `Nom : ${form.get("name")}`,
      `Email : ${form.get("email")}`,
      `Organisation : ${form.get("company") || "—"}`,
      "",
      String(form.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        overlayClassName="bg-black/60 backdrop-blur-md data-[state=open]:duration-500 data-[state=closed]:duration-350 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
        className={cn(
          "max-h-[92vh] max-w-5xl overflow-hidden border-border/60 bg-surface p-0 duration-500 sm:rounded-3xl",
          "data-[state=closed]:duration-350 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
          "[&>button]:z-10 [&>button]:text-muted-foreground [&>button]:hover:text-foreground",
          sent && "border-emerald-500/30 [&>button]:text-emerald-100/80 [&>button]:hover:text-emerald-50",
        )}
      >
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex min-h-[28rem] flex-col items-center justify-center overflow-hidden px-8 py-16 text-center"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(52,211,153,0.25),transparent_60%)]"
                aria-hidden="true"
              />

              <motion.span
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 160, damping: 16 }}
                className="relative grid h-20 w-20 place-items-center rounded-full border border-emerald-400/40 bg-emerald-500/20 shadow-[0_0_60px_rgba(52,211,153,0.35)]"
              >
                <Check className="h-10 w-10 text-emerald-300" strokeWidth={2.5} />
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="relative mt-8"
              >
                <DialogTitle className="font-display text-2xl font-bold text-emerald-50 sm:text-3xl">
                  Message envoyé !
                </DialogTitle>
                <DialogDescription className="mt-3 max-w-md text-sm leading-relaxed text-emerald-100/75">
                  Votre messagerie s'est ouverte avec le message pré-rempli. Nous revenons vers vous
                  sous 48 heures ouvrées.
                </DialogDescription>
              </motion.div>

              <motion.button
                type="button"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.45 }}
                onClick={() => onOpenChange(false)}
                className="relative mt-10 inline-flex min-h-11 items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-7 text-sm font-semibold text-emerald-100 transition-colors hover:border-emerald-300/50 hover:bg-emerald-500/20"
              >
                Fermer
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[92vh] overflow-y-auto p-6 sm:p-10"
            >
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Contact
              </p>
              <DialogTitle className="mt-3 text-center font-display text-3xl font-bold sm:text-4xl">
                Parlons de votre projet
              </DialogTitle>
              <DialogDescription className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed">
                Décrivez-nous votre besoin en quelques lignes. Nous revenons vers vous sous 48 heures
                ouvrées.
              </DialogDescription>

              <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-10">
                <ul className="space-y-4">
                  <li className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-accent/25 bg-accent/15">
                      <MapPin className="h-5 w-5 text-accent" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                        Adresse
                      </span>
                      <span className="mt-1 block text-sm">{site.address}</span>
                    </span>
                  </li>
                  <li className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-accent/25 bg-accent/15">
                      <Phone className="h-5 w-5 text-accent" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                        Téléphone
                      </span>
                      <a
                        href={`tel:${site.phone.replace(/\s/g, "")}`}
                        className="mt-1 block text-sm hover:text-accent"
                      >
                        {site.phone}
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-accent/25 bg-accent/15">
                      <Mail className="h-5 w-5 text-accent" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                        Email
                      </span>
                      <a
                        href={`mailto:${site.email}`}
                        className="mt-1 block break-all text-sm hover:text-accent"
                      >
                        {site.email}
                      </a>
                    </span>
                  </li>
                </ul>

                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-border bg-card p-6 shadow-elevated sm:p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="dc-name">Nom complet</Label>
                      <Input
                        id="dc-name"
                        name="name"
                        required
                        placeholder="Votre nom"
                        className={fieldClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dc-email">Email professionnel</Label>
                      <Input
                        id="dc-email"
                        name="email"
                        type="email"
                        required
                        placeholder="vous@entreprise.ci"
                        className={fieldClass}
                      />
                    </div>
                  </div>
                  <div className="mt-5 space-y-2">
                    <Label htmlFor="dc-company">Organisation</Label>
                    <Input
                      id="dc-company"
                      name="company"
                      placeholder="Nom de votre organisation"
                      className={fieldClass}
                    />
                  </div>
                  <div className="mt-5 space-y-2">
                    <Label htmlFor="dc-message">Votre projet</Label>
                    <Textarea
                      id="dc-message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Décrivez votre besoin..."
                      className={fieldClass}
                    />
                  </div>
                  <button
                    type="submit"
                    className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-brand px-7 text-sm font-semibold text-accent-foreground transition-shadow hover:shadow-glow"
                  >
                    Envoyer le message <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
