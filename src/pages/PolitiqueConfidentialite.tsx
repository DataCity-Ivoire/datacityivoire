import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import { site } from "@/data/site";

const PolitiqueConfidentialite = () => (
  <>
    <Seo
      title="Politique de confidentialité | Data City Ivoire"
      description="Politique de confidentialité de Data City Ivoire : données collectées, finalités, conservation, sécurité et droits des utilisateurs."
      path="/politique-confidentialite"
    />
    <PageHero
      eyebrow="Protection des données"
      title="Politique de confidentialité"
      description="Nous accordons une importance essentielle à la protection de vos données personnelles."
    />

    <section className="bg-background py-20">
      <div className="container mx-auto max-w-3xl space-y-10 px-4 text-sm leading-relaxed text-muted-foreground">
        <div>
          <h2 className="font-display text-xl font-bold text-foreground">Données collectées</h2>
          <p className="mt-3">
            Nous collectons uniquement les données que vous nous transmettez volontairement via le
            formulaire de contact : nom, adresse email, organisation et contenu de votre message.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-foreground">Finalités du traitement</h2>
          <p className="mt-3">
            Ces données sont utilisées exclusivement pour répondre à vos demandes, qualifier votre
            besoin et assurer le suivi de la relation commerciale. Elles ne font l'objet d'aucune
            cession ni vente à des tiers.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-foreground">Durée de conservation</h2>
          <p className="mt-3">
            Vos données sont conservées pour la durée strictement nécessaire au traitement de votre
            demande, puis archivées ou supprimées conformément aux obligations légales applicables.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-foreground">Sécurité</h2>
          <p className="mt-3">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
            protéger vos données contre tout accès, altération ou divulgation non autorisés.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-foreground">Cookies</h2>
          <p className="mt-3">
            Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement,
            notamment la mémorisation de votre préférence de thème d'affichage.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-foreground">Vos droits</h2>
          <p className="mt-3">
            Vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de
            vos données. Pour exercer ces droits, écrivez-nous à{" "}
            <a href={`mailto:${site.email}`} className="text-accent hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  </>
);

export default PolitiqueConfidentialite;
