import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  lines: string[];
  accentWord?: string;
}

export function MissionCallout({ eyebrow = "Our Mission", lines, accentWord }: Props) {
  return (
    <section className="py-24 md:py-36 bg-cream">
      <div className="container-syc">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">{eyebrow}</p>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-display text-charcoal text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl"
        >
          {lines.map((line, i) => (
            <span key={i} className="block">
              {accentWord && line.includes(accentWord)
                ? line.split(accentWord).flatMap((chunk, idx, arr) =>
                    idx < arr.length - 1
                      ? [chunk, <span key={idx} className="text-orange italic">{accentWord}</span>]
                      : [chunk],
                  )
                : line}
            </span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
}
