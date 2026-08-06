import { motion } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Props {
  icon: LucideIcon;
  index: string;
  title: string;
  description: string;
  highlights: string[];
  to?: string;
  tone?: "cream" | "orange" | "charcoal" | "gold";
}

const tones = {
  cream: "bg-warm text-charcoal border-border",
  orange: "bg-orange text-warm border-orange",
  charcoal: "bg-charcoal text-warm border-charcoal",
  gold: "bg-gold text-charcoal border-gold",
};

export function ProgramCard({ icon: Icon, index, title, description, highlights, to = "/programs", tone = "cream" }: Props) {
  const isDark = tone === "orange" || tone === "charcoal";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`group relative overflow-hidden rounded-3xl border p-8 md:p-10 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-32px_rgba(35,31,26,0.35)] ${tones[tone]}`}
    >
      <div className="flex items-start justify-between">
        <span className={`text-xs font-semibold uppercase tracking-[0.3em] ${isDark ? "text-warm/70" : "text-orange"}`}>
          {index}
        </span>
        <Icon className={`h-8 w-8 ${isDark ? "text-warm" : "text-orange"}`} strokeWidth={1.6} />
      </div>

      <h3 className="mt-8 text-display text-3xl md:text-4xl leading-tight">{title}</h3>
      <p className={`mt-4 leading-relaxed ${isDark ? "text-warm/80" : "text-charcoal/70"}`}>
        {description}
      </p>

      <ul className={`mt-6 space-y-2 text-sm ${isDark ? "text-warm/80" : "text-charcoal/75"}`}>
        {highlights.map((h) => (
          <li key={h} className="flex gap-3">
            <span className={`mt-2 h-1 w-4 rounded-full flex-none ${isDark ? "bg-gold" : "bg-orange"}`} />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <Link
        to={to}
        className={`mt-8 inline-flex items-center gap-2 font-semibold ${
          isDark ? "text-warm" : "text-orange"
        } group-hover:gap-3 transition-all`}
      >
        Learn more <ArrowUpRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
