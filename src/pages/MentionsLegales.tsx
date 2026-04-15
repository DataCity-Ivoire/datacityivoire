import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MentionsLegales = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">Mentions légales</h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Éditeur du site</h2>
            <p>
              <strong>Data City Ivoire</strong><br />
              Groupe technologique ivoirien<br />
              Email : <a href="mailto:contact@datacityivoire.ci" className="text-secondary hover:underline">contact@datacityivoire.ci</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Hébergement</h2>
            <p>Ce site est hébergé par des prestataires professionnels garantissant la disponibilité et la sécurité des données.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, graphismes, icônes) est la propriété exclusive de Data City Ivoire ou de ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Responsabilité</h2>
            <p>
              Data City Ivoire s'efforce de fournir des informations aussi précises que possible. Toutefois, elle ne saurait être tenue responsable des omissions, inexactitudes ou carences dans la mise à jour des informations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit ivoirien. En cas de litige, les tribunaux d'Abidjan seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default MentionsLegales;
