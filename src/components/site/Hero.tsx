import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface HeroProps {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle: string;
  ctaLabel?: string;
  ctaTo?: string;
  overlay?: "dark" | "warm";
  /** Text colors for light (warm) overlays where white is unreadable */
  tone?: "light" | "dark";
  minHeight?: string;
  showScroll?: boolean;
}

export function Hero({
  image,
  imageAlt = "",
  eyebrow,
  title,
  subtitle,
  ctaLabel = "Join Synergy",
  ctaTo = "/join",
  overlay = "dark",
  tone,
  minHeight = "min-h-[100svh]",
  showScroll = true,
}: HeroProps) {
  const textTone = tone ?? (overlay === "warm" ? "dark" : "light");
  const isLightText = textTone === "light";

  return (
    <section
      className={`relative w-full ${minHeight} flex flex-col overflow-hidden`}
      aria-label={typeof eyebrow === "string" ? eyebrow : "Hero"}
    >
      <img
        src={image}
        alt={imageAlt || (typeof eyebrow === "string" ? `${eyebrow} background` : "Hero background")}
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-kenburns"
        fetchPriority="high"
        decoding="async"
      />
      <div
        className={`absolute inset-0 ${
          overlay === "dark"
            ? "bg-gradient-to-b from-charcoal/75 via-charcoal/60 to-charcoal/85"
            : "bg-gradient-to-b from-cream/88 via-cream/78 to-cream/92"
        }`}
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col justify-center pt-28 pb-8">
        <div className="container-syc text-center">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className={`inline-flex items-center gap-2 rounded-full border backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${
                isLightText
                  ? "border-warm/30 bg-warm/10 text-warm"
                  : "border-charcoal/15 bg-warm/70 text-charcoal"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden />
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            className={`mt-6 text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6.5rem] max-w-5xl mx-auto leading-[0.95] ${
              isLightText ? "text-warm" : "text-charcoal"
            }`}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            className={`mt-6 mx-auto max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed ${
              isLightText ? "text-warm/85" : "text-charcoal/75"
            }`}
          >
            {subtitle}
          </motion.p>

          {ctaLabel && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32, ease: "easeOut" }}
              className="mt-10 flex flex-wrap justify-center gap-3"
            >
              <Link to={ctaTo} className="btn-orange btn-orange-hover">
                {ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/programs"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full border font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  isLightText
                    ? "border-warm/40 text-warm hover:bg-warm/10"
                    : "border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-warm"
                }`}
              >
                Explore programs
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      {showScroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className={`relative z-10 flex flex-col items-center gap-2 pb-7 text-[10px] uppercase tracking-[0.3em] ${
            isLightText ? "text-warm/55" : "text-charcoal/45"
          }`}
          aria-hidden
        >
          <span>Scroll</span>
          <span
            className={`h-8 w-px ${isLightText ? "bg-warm/35" : "bg-charcoal/25"} animate-scroll-line`}
          />
        </motion.div>
      )}
    </section>
  );
}
