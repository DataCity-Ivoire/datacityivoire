import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import HoverArrow from "@/components/HoverArrow";

const NotFound = () => (
  <>
    <Seo
      title="Page introuvable | Data City Ivoire"
      description="La page demandée n'existe pas ou a été déplacée."
      path="/404"
    />
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-gradient-deep px-4 text-center text-white">
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" aria-hidden="true" />
      <div className="relative">
        <p className="font-display text-7xl font-bold text-gradient lg:text-9xl">404</p>
        <h1 className="mt-6 font-display text-2xl font-bold lg:text-4xl">Cette page est introuvable</h1>
        <p className="mx-auto mt-4 max-w-md text-white/65">
          Le lien est peut-être obsolète. Revenez à l'accueil ou explorez nos expertises.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="group inline-flex min-h-11 items-center rounded-full bg-gradient-brand px-7 text-sm font-semibold text-accent-foreground"
          >
            Retour à l'accueil
            <HoverArrow />
          </Link>
          <Link
            to="/#expertises"
            className="inline-flex min-h-11 items-center rounded-full border border-white/25 px-7 text-sm font-semibold hover:border-accent hover:text-accent"
          >
            Nos expertises
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default NotFound;
