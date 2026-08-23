import { Brain, BarChart3, LineChart, Globe, Smartphone, Cloud, Code2, Workflow, Rocket, Compass, Map } from "lucide-react";

export const site = {
  name: "Data City Ivoire",
  slogan: "L'Afrique connectée, intelligente et souveraine.",
  description:
    "Nous aidons les organisations africaines à accélérer leur transformation numérique grâce à la donnée, l'intelligence artificielle et des solutions technologiques sur mesure.",
  email: "contact@datacityivoire.ci",
  // Numéro repris du bouton WhatsApp, où il était codé en dur. Il diverge du
  // placeholder qui figurait ici : à confirmer avant mise en ligne.
  phone: "+225 07 19 81 17 17",
  whatsapp: "2250719811717",
  address: "Abidjan, Côte d'Ivoire",
  // TODO : remplacer par les vrais profils (ces liens pointent vers les
  // pages d'accueil des plateformes, pas vers les comptes de l'entreprise).
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/datacityivoire", icon: "linkedin" as const },
    { label: "Facebook", href: "https://www.facebook.com/DataCityIvoire", icon: "facebook" as const },
    { label: "Instagram", href: "https://www.instagram.com/DataCityIvoire", icon: "instagram" as const },
    { label: "X", href: "https://x.com/DataCityIvoire", icon: "x" as const },
    { label: "YouTube", href: "https://www.youtube.com/@DataCityIvoire", icon: "youtube" as const },
  ],

};
export interface NavItem {
  label: string;
  /** Identifiant de la section sur la page unique. */
  id: string;
}

/** Navigation principale. Contact est porté par le bouton d'appel à l'action. */
/* L'ordre suit celui du défilement de la page. */
export const navigation: NavItem[] = [
  { label: "Accueil", id: "accueil" },
  { label: "Expertises", id: "expertises" },
  { label: "Méthodologie", id: "methodologie" },
  { label: "Blog", id: "blog" },
  { label: "À propos", id: "a-propos" },
];

/** Toutes les sections de la page, dans l'ordre — utilisé par le pied de page. */
export const allSections: NavItem[] = [
  { label: "Accueil", id: "accueil" },
  { label: "Expertises", id: "expertises" },
  { label: "Méthodologie", id: "methodologie" },
  { label: "Blog", id: "blog" },
  { label: "À propos", id: "a-propos" },
  // Il n'y a pas de section « contact » dans la page : `HashScroll` intercepte
  // cette ancre et ouvre la fenêtre modale de contact.
  { label: "Contact", id: "contact" },
];

export const expertises = [
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Collecte, structuration et exploitation de vos données pour révéler des signaux exploitables et fiables.",
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description:
      "Modèles prédictifs, traitement du langage et automatisation intelligente appliqués à vos processus métier.",
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    description:
      "Tableaux de bord décisionnels et indicateurs de pilotage temps réel pour les directions générales.",
  },
  {
    icon: Globe,
    title: "Applications Web",
    description:
      "Plateformes web performantes, sécurisées et évolutives, conçues pour des usages à grande échelle.",
  },
  {
    icon: Smartphone,
    title: "Applications Mobile",
    description:
      "Expériences mobiles natives et cross-platform pensées pour les réalités d'usage africaines.",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description:
      "Architectures cloud et hybrides, industrialisation des déploiements et maîtrise des coûts.",
  },
  {
    icon: Code2,
    title: "Développement logiciel",
    description:
      "Logiciels métier sur mesure, API et systèmes d'information robustes et maintenables.",
  },
  {
    icon: Workflow,
    title: "Automatisation",
    description:
      "Orchestration des flux, réduction des tâches manuelles et fiabilisation des opérations.",
  },
  {
    icon: Rocket,
    title: "Transformation numérique",
    description:
      "Modernisation des processus, conduite du changement et montée en maturité digitale.",
  },
  {
    icon: Compass,
    title: "Conseil technologique",
    description:
      "Cadrage stratégique, choix d'architecture et gouvernance de la donnée au service de vos objectifs.",
  },
  {
    icon: Map,
    title: "SIG & géodonnées",
    description:
      "Cartographie, analyse spatiale et valorisation des données géographiques pour le territoire.",
  },
  {
    icon: Rocket,
    title: "Robotique et prototypes",
    description:
      "Développement de solutions robotiques et de prototypes fonctionnels pour des applications innovantes.",
  },
  {
    icon: Compass,
    title: "UX/UI et design culturel",
    description:
      "Expériences utilisateur optimisées et designs culturellement adaptés pour des applications numériques pertinentes.",
  },
  {
    icon: Map,
    title: "Recherche & Développement (R&D)",
    description:
      "Investissements dans la recherche fondamentale et appliquée, pour développer des solutions innovantes et rester à la pointe de la technologie.",
  },
];

export const faq = [
  {
    q: "Pourquoi Data City Ivoire ?",
    a: "Nous combinons une expertise pointue en données et en ingénierie logicielle avec une connaissance fine des contextes africains. Nos équipes livrent des solutions durables, documentées et transférables, pensées pour rester maîtrisées par nos clients.",
  },
  {
    q: "Quels services proposez-vous ?",
    a: "Data & Analytics, intelligence artificielle, business intelligence, développement web et mobile, cloud, automatisation, transformation numérique et conseil technologique.",
  },
  {
    q: "Travaillez-vous avec les PME ?",
    a: "Oui. Nous proposons des dispositifs progressifs et calibrés qui permettent aux PME de démarrer par un périmètre maîtrisé, puis d'étendre leur socle technologique à mesure de leur croissance.",
  },
  {
    q: "Travaillez-vous avec les administrations ?",
    a: "Oui. Nous accompagnons institutions et acteurs publics sur des projets de valorisation de la donnée, de modernisation des services et de gouvernance numérique, avec les exigences de sécurité et de souveraineté associées.",
  },
  {
    q: "Comment démarrer un projet ?",
    a: "Un premier échange de cadrage permet de qualifier votre besoin. Nous formalisons ensuite les objectifs, le périmètre et les livrables avant de lancer la phase de discovery.",
  },
  {
    q: "Comment demander un devis ?",
    a: "Adressez-nous votre besoin via le formulaire de contact. Nous revenons vers vous rapidement avec une proposition d'accompagnement adaptée à votre contexte.",
  },
];
