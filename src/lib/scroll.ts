/** Défilement fluide vers une section de la page unique. */
export const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", id === "accueil" ? "/" : `/#${id}`);
};

/** Handler prêt à l'emploi : conserve un vrai `href` pour l'accessibilité. */
export const onSectionLink =
  (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection(id);
  };
