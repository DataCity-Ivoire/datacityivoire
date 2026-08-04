import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import { site } from "@/data/site";

const MentionsLegales = () => (
  <>
    <Seo
      title="Mentions légales | Data City Ivoire"
      description="Mentions légales du site Data City Ivoire : éditeur, hébergement, propriété intellectuelle et responsabilité."
      path="/mentions-legales"
    />
    <PageHero
      eyebrow="Informations légales"
      title="Mentions légales"
      description="Informations relatives à l'éditeur du site, à son hébergement et aux conditions d'utilisation."
    />

    <section className="bg-background py-20">
      <div className="container mx-auto max-w-3xl space-y-10 px-4 text-sm leading-relaxed text-muted-foreground">
        <div>
          <h2 className="font-display text-xl font-bold text-foreground">Éditeur du site</h2>
          <p className="mt-3">
            <strong className="text-foreground">{site.name}</strong>
            <br />
            Entreprise technologique — {site.address}
            <br />
            Email :{" "}
            <a href={`mailto:${site.email}`} className="text-accent hover:underline">
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-foreground">Hébergement</h2>
          <p className="mt-3">
            Ce site est hébergé par des prestataires professionnels garantissant la disponibilité,
            la performance et la sécurité des données.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-foreground">Propriété intellectuelle</h2>
          <p className="mt-3">
            L'ensemble des contenus présents sur ce site (textes, visuels, logos, éléments
            graphiques, code) est la propriété exclusive de {site.name}, sauf mention contraire.
            Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite
            préalable est interdite.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-foreground">Responsabilité</h2>
          <p className="mt-3">
            {site.name} met tout en œuvre pour assurer l'exactitude des informations publiées, sans
            pouvoir en garantir l'exhaustivité. La responsabilité de l'éditeur ne saurait être
            engagée en cas d'usage des informations mises à disposition sur ce site.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-foreground">Liens externes</h2>
          <p className="mt-3">
            Les liens vers des sites tiers présents sur ce site n'engagent pas la responsabilité de
            {" "}{site.name} quant à leur contenu.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default MentionsLegales;
