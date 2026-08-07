import { cn } from "@/lib/utils";

/** Silhouette de l'Afrique projetée depuis les coordonnées réelles (lon/lat). */
const MAINLAND_PATH =
  "M11.6 1.2 L20.5 0.2 L27.7 0 L30.7 4.1 L35 6.1 L37.5 4.9 L42.5 5.5 L47.4 5.8 L49.8 5.8 " +
  "L50 7.1 L52 9.5 L53 13.5 L54.7 16 L56.5 19 L57 21.5 L60.5 24.3 L61.5 26.6 L65.5 25.5 " +
  "L68.9 25.2 L66 29 L64.5 33 L61.5 35.5 L59 38.7 L57.2 41 L57 43.9 L58 47.5 L58.1 51.5 " +
  "L54.4 54.9 L52.8 58 L50.4 62.9 L48.5 66.5 L45.4 70 L43.1 71 L39.5 71.1 L35.9 71.3 " +
  "L34.5 69 L32 59.5 L29.2 54.9 L30.5 49.5 L29.7 43 L26.8 38 L27.2 33 L26 32.4 L22.5 31.4 " +
  "L20 30.7 L16.5 32 L14.5 32 L12 32 L10 32.6 L8.5 30.5 L6 29.3 L4 27.5 L1.5 24.5 L0 22.3 " +
  "L1 18 L1.5 15.5 L4.5 9.5 L7.7 7 L8.5 4.5 L11.5 3 Z";

const MADAGASCAR_PATH =
  "M67 49.5 L68 52.5 L67.3 55 L65 59 L62.7 62.6 L61 59 L60.8 55 L62 53.2 L64 52.7 L66 50.3 Z";

/** Nœuds du réseau de données superposé au continent. */
const NODES: [number, number, number][] = [
  [18, 9, 1.5], [28, 6.5, 1.2], [38, 10, 1.5], [46, 12, 1.2],
  [10, 20, 1.3], [22, 18, 1.6], [32, 20, 1.4], [43, 22, 1.2],
  [30, 30, 2.4], // pôle central
  [40, 32, 1.3], [23, 34, 1.4],
  [34, 42, 1.5], [45, 40, 1.2],
  [37, 52, 1.4], [43, 60, 1.2],
];

const LINKS: [number, number][][] = [
  [[18, 9], [28, 6.5]], [[28, 6.5], [38, 10]], [[38, 10], [46, 12]],
  [[18, 9], [22, 18]], [[10, 20], [22, 18]], [[22, 18], [32, 20]],
  [[32, 20], [43, 22]], [[28, 6.5], [32, 20]], [[38, 10], [43, 22]],
  [[30, 30], [22, 18]], [[30, 30], [32, 20]], [[30, 30], [40, 32]],
  [[30, 30], [23, 34]], [[30, 30], [34, 42]], [[30, 30], [10, 20]],
  [[30, 30], [46, 12]], [[23, 34], [34, 42]], [[34, 42], [45, 40]],
  [[34, 42], [37, 52]], [[37, 52], [43, 60]],
];

interface LogoProps {
  className?: string;
  /** Classe de couleur pour « Data City » (le mot « IVOIRE » reste orange). */
  textClassName?: string;
  /** Masque le texte pour n'afficher que le symbole. */
  markOnly?: boolean;
  markClassName?: string;
}

const Logo = ({ className, textClassName, markOnly = false, markClassName }: LogoProps) => (
  <span className={cn("inline-flex items-center gap-2.5", className)}>
    <svg
      viewBox="-1 -1 71 74"
      className={cn("h-9 w-auto shrink-0", markClassName)}
      role="img"
      aria-label="Data City Ivoire"
    >
      <defs>
        <linearGradient id="dci-map" x1="0%" y1="0%" x2="55%" y2="100%">
          <stop offset="0%" stopColor="#0f4c92" />
          <stop offset="22%" stopColor="#1a7fc1" />
          <stop offset="42%" stopColor="#2f9bbd" />
          <stop offset="58%" stopColor="#f0952a" />
          <stop offset="80%" stopColor="#ef6a1c" />
          <stop offset="100%" stopColor="#d93a12" />
        </linearGradient>
      </defs>

      <path d={MAINLAND_PATH} fill="url(#dci-map)" />
      <path d={MADAGASCAR_PATH} fill="url(#dci-map)" />

      <g stroke="#ffffff" strokeWidth="0.75" strokeLinecap="round" opacity="0.9">
        {LINKS.map(([[x1, y1], [x2, y2]], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>

      <g fill="#ffffff">
        {NODES.map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} />
        ))}
      </g>
    </svg>

    {!markOnly && (
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-lg font-bold leading-tight", textClassName)}>
          Data City
        </span>
        <span className="font-display text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-accent">
          Ivoire
        </span>
      </span>
    )}
  </span>
);

export default Logo;
