import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselItem {
  image: string;
  title: string;
  caption: string;
  tag?: string;
}

function SlideCard({ item }: { item: CarouselItem }) {
  return (
    <article className="h-full rounded-3xl overflow-hidden bg-warm text-charcoal shadow-[0_24px_60px_-32px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
        {item.tag && (
          <span className="absolute top-4 left-4 bg-orange text-warm text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
            {item.tag}
          </span>
        )}
      </div>
      <div className="p-6 md:p-7">
        <h3 className="text-display text-xl md:text-2xl">{item.title}</h3>
        <p className="mt-3 text-charcoal/70 leading-relaxed text-sm md:text-base">{item.caption}</p>
      </div>
    </article>
  );
}

export function Carousel({
  items,
  eyebrow,
  heading,
}: {
  items: CarouselItem[];
  eyebrow?: string;
  heading?: string;
}) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(2);
  const total = items.length;

  useEffect(() => {
    const sync = () => setPerView(window.matchMedia("(min-width: 768px)").matches ? 2 : 1);
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  const go = useCallback(
    (dir: -1 | 1) => {
      if (total === 0) return;
      setIndex((i) => (i + dir + total) % total);
    },
    [total],
  );

  const visible =
    total === 0
      ? []
      : perView >= total
        ? Array.from({ length: total }, (_, n) => items[(index + n) % total])
        : Array.from({ length: perView }, (_, n) => items[(index + n) % total]);

  const progress = total <= 1 ? 1 : index / (total - 1);

  return (
    <section className="py-24 md:py-32 bg-charcoal text-warm overflow-hidden">
      <div className="container-syc">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
            )}
            {heading && (
              <h2 className="mt-4 text-display text-4xl md:text-6xl max-w-2xl">{heading}</h2>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="h-12 w-12 grid place-items-center rounded-full border border-warm/25 hover:bg-warm/10 hover:border-orange/50 hover:text-orange transition-all duration-300 active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="h-12 w-12 grid place-items-center rounded-full border border-warm/25 hover:bg-warm/10 hover:border-orange/50 hover:text-orange transition-all duration-300 active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        <div
          className="mt-12 relative"
          role="region"
          aria-roledescription="carousel"
          aria-label={heading ?? "Moments carousel"}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${index}-${perView}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`grid gap-6 ${perView === 2 ? "md:grid-cols-2 grid-cols-1" : "grid-cols-1"}`}
            >
              {visible.map((it, i) => (
                <SlideCard key={`${it.title}-${i}`} item={it} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          className="mt-8 h-1 w-full rounded-full bg-warm/10 overflow-hidden"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
          aria-label="Carousel progress"
        >
          <div
            className="h-full rounded-full bg-orange transition-[width] duration-300 ease-out"
            style={{ width: `${Math.max(20, ((index + 1) / total) * 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
}
