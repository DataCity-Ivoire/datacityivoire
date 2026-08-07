import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import Reveal from "@/components/Reveal";

const NewsletterBar = () => {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Pas de service d'envoi branché pour l'instant : on confirme localement
    // sans faire croire à une inscription réellement enregistrée côté serveur.
    window.setTimeout(() => {
      toast.success("Merci ! Nous vous confirmerons votre inscription par email.");
      setEmail("");
      setSending(false);
    }, 400);
  };

  return (
    <div className="container mx-auto px-4">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-gradient-deep px-6 py-8 sm:px-10">
          <div className="absolute inset-0 grid-pattern opacity-[0.05]" aria-hidden="true" />
          <div
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-[90px]"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                Restez informé des dernières tendances tech
              </h3>
              <p className="mt-1 text-sm text-white/60">
                Nos analyses, directement dans votre boîte mail. Sans spam.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Adresse email
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="min-h-11 w-full rounded-full border border-white/15 bg-white/[0.06] px-5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus-visible:border-accent sm:w-64"
              />
              <button
                type="submit"
                disabled={sending}
                className="group min-h-11 shrink-0 rounded-full bg-gradient-brand px-6 text-sm font-semibold text-accent-foreground transition-shadow hover:shadow-glow disabled:opacity-60"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default NewsletterBar;
