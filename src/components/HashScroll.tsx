import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContactDialog } from "@/components/contact/ContactDialogProvider";

/**
 * Amène la vue sur la section demandée par l'ancre (`/#expertises`),
 * y compris à l'arrivée sur le site depuis un lien externe.
 * L'ancre `#contact` ouvre le modal de contact.
 */
const HashScroll = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const { open: openContact } = useContactDialog();

  useEffect(() => {
    if (pathname !== "/") return;

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }

    const id = hash.slice(1);

    if (id === "contact") {
      openContact();
      navigate("/", { replace: true });
      return;
    }

    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (attempts++ < 20) window.setTimeout(tryScroll, 100);
    };
    tryScroll();
  }, [pathname, hash, navigate, openContact]);

  return null;
};

export default HashScroll;
