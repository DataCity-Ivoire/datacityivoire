import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">Politique de confidentialité</h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Collecte des données</h2>
            <p>
              Data City Ivoire collecte uniquement les données personnelles nécessaires au traitement de vos demandes via le formulaire de contact : nom, adresse email, entreprise et message. Ces données sont collectées avec votre consentement explicite.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Utilisation des données</h2>
            <p>Les données collectées sont utilisées exclusivement pour :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Répondre à vos demandes de contact</li>
              <li>Traiter vos demandes de partenariat ou de collaboration</li>
              <li>Vous informer de nos services, avec votre accord</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Protection des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Conservation des données</h2>
            <p>
              Vos données personnelles sont conservées pendant la durée nécessaire au traitement de votre demande et au maximum pendant 3 ans à compter du dernier contact.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Vos droits</h2>
            <p>Conformément à la réglementation en vigueur, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit de suppression de vos données</li>
              <li>Droit d'opposition au traitement de vos données</li>
              <li>Droit à la portabilité de vos données</li>
            </ul>
            <p className="mt-2">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@datacityivoire.ci" className="text-secondary hover:underline">contact@datacityivoire.ci</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de suivi. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.
            </p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default PolitiqueConfidentialite;
