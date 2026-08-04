import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-illustration.jpg";
import MagneticButton from "@/components/MagneticButton";

const stats = [
  { value: "10+", label: "Domaines d'expertise" },
  { value: "100%", label: "Solutions sur mesure" },
  { value: "2050", label: "Horizon souveraineté" },
];

const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-deep pb-24 pt-36 text-primary-foreground lg:pb-32 lg:pt-44">
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" aria-hidden="true" />
      <div className="absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[120px]" aria-hidden="true" />
      <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-secondary/20 blur-[120px]" aria-hidden="true" />

      <div className="container relative mx-auto grid items-center gap-16 px-4 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-1.5 text-xs font-medium text-primary-foreground/80"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Data · Intelligence Artificielle · Ingénierie logicielle
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[4.1rem]"
          >
            L'Afrique connectée,{" "}
            <span className="text-gradient">intelligente</span> et souveraine.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70"
          >
            Data City Ivoire accompagne entreprises et institutions dans la valorisation de leurs
            données et la construction de plateformes numériques fiables, sécurisées et durables.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton to="/contact">
              Démarrer un projet <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <Link
              to="/expertises"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-primary-foreground/20 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Découvrir nos expertises
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/10 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-accent lg:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-primary-foreground/60">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className={`overflow-hidden rounded-3xl border border-primary-foreground/10 shadow-elevated ${reduce ? "" : "animate-float"}`}>
            <img
              src={heroImage}
              alt="Représentation du continent africain sous forme de réseau de données lumineux"
              width={1280}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="glass-dark absolute -bottom-6 -left-4 hidden rounded-2xl px-5 py-4 sm:block">
            <p className="text-xs uppercase tracking-wider text-accent">Souveraineté numérique</p>
            <p className="mt-1 text-sm text-primary-foreground/80">Vos données, vos règles.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
