import { Brain, BarChart3, LineChart, Globe, Smartphone, Cloud, Code2, Workflow, Rocket, Compass, Map } from "lucide-react";

export const site = {
  name: "Data City Ivoire",
  slogan: "L'Afrique connectée, intelligente et souveraine.",
  description:
    "Nous aidons les organisations africaines à accélérer leur transformation numérique grâce à la donnée, l'intelligence artificielle et des solutions technologiques sur mesure.",
  email: "contact@datacityivoire.ci",
  phone: "+225 07 00 00 00 00",
  whatsapp: "2250700000000",
  address: "Abidjan, Côte d'Ivoire",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Facebook", href: "https://www.facebook.com" },
    { label: "Instagram", href: "https://www.instagram.com" },
    { label: "X", href: "https://x.com" },
    { label: "YouTube", href: "https://www.youtube.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
};

export const navigation = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Expertises", to: "/expertises" },
  { label: "Méthodologie", to: "/methodologie" },
  { label: "Réalisations", to: "/realisations" },
  { label: "Blog", to: "/blog" },
  { label: "Carrières", to: "/carrieres" },
  { label: "Contact", to: "/contact" },
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
