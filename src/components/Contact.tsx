import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Contact</p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground">
            Parlons de votre projet
          </h2>
        </div>

        <div className="max-w-xl mx-auto reveal-on-scroll">
          {submitted ? (
            <div className="text-center p-12 rounded-2xl bg-card border border-secondary/30">
              <p className="text-2xl mb-2">✅</p>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Message envoyé !</h3>
              <p className="text-muted-foreground">Nous reviendrons vers vous dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 bg-card rounded-2xl border border-border p-8">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nom</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Votre nom complet"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Entreprise</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Nom de votre entreprise"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Type de demande</label>
                <select
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Sélectionner</option>
                  <option>Projet</option>
                  <option>Collaboration</option>
                  <option>Partenariat</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Décrivez votre besoin..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-orange text-secondary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Envoyer le message
              </button>
            </form>
          )}

          {/* WhatsApp */}
          <div className="mt-6 text-center">
            <a
              href="https://wa.me/2250719811717"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Ou contactez-nous sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
