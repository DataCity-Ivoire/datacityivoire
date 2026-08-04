import { Helmet } from "react-helmet-async";
import { site } from "@/data/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  type?: string;
}

const Seo = ({ title, description, path, type = "website" }: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={path} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type} />
    <meta property="og:url" content={path} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: site.name,
        slogan: site.slogan,
        email: site.email,
        address: { "@type": "PostalAddress", addressLocality: "Abidjan", addressCountry: "CI" },
      })}
    </script>
  </Helmet>
);

export default Seo;
