import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ClosingCTA({
  eyebrow = "Ready when you are",
  title = "Your future doesn't wait. Neither do we.",
  ctaLabel = "Join Synergy",
}: {
  eyebrow?: string;
  title?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="py-24 md:py-32 bg-orange text-warm relative overflow-hidden">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-charcoal/20 blur-3xl" />
      <div className="container-syc relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-warm/80"
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-display text-5xl md:text-7xl max-w-3xl"
        >
          {title}
        </motion.h2>
        <div className="mt-10">
          <Link
            to="/join"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal text-warm px-7 py-4 font-semibold transition-all duration-300 hover:bg-warm hover:text-charcoal hover:-translate-y-0.5 hover:shadow-lg"
          >
            {ctaLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
