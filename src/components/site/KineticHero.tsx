import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import heroImg from "@/assets/hero-home.jpg";

const marqueeWords = [
  "Vision", "→", "Impact", "·", "Learn", "·", "Lead", "·", "Connect", "·", "Rise",
];

export function KineticHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-charcoal"
      aria-label="Home hero"
    >
      <motion.img
        src={heroImg}
        alt="Young African professionals standing together with confidence"
        style={{ y: imgY }}
        className="absolute inset-0 h-[115%] w-full object-cover"
        fetchPriority="high"
        decoding="async"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-charcoal/85"
        aria-hidden
      />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 min-h-[100svh] flex flex-col justify-center pt-28 pb-24"
      >
        <div className="container-syc text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-warm/25 bg-warm/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-warm"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" aria-hidden />
            Pan-African Youth · Est. 2026
          </motion.p>

          <h1 className="mt-8 text-display text-warm text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="block"
            >
              From Vision
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="block"
            >
              to <span className="italic text-orange">Impact.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-8 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-warm/85 leading-relaxed"
          >
            We equip young people with the practical skills, research capacity, and global
            exposure to thrive in a competitive world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <Link to="/join" className="btn-orange btn-orange-hover">
              Join Synergy <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-warm/35 text-warm font-semibold transition-all duration-300 hover:bg-warm/10 hover:-translate-y-0.5"
            >
              Explore programs
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Kinetic marquee at bottom */}
      <div className="absolute bottom-0 inset-x-0 bg-charcoal/75 backdrop-blur-md py-5 overflow-hidden">
        <div
          className="flex animate-marquee whitespace-nowrap gap-10 text-warm/70 font-display font-semibold text-lg md:text-xl tracking-tight"
          aria-hidden
        >
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className={w === "→" || w === "·" ? "text-orange" : ""}>
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
